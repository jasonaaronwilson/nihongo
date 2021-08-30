
    var SESSION_QUESTIONS = 10; // Easier for debugging

    var FONT_FAMILIES = [
       'font-family-noto-serif-jp',
       'font-family-sawarabi-mincho',
       'font-family-potta-one',
       'font-family-yusei-magic',
       'font-family-hachi-maru-pop',
       'font-family-m-plus-1p',
       'font-family-sawarabi-gothic',
       'font-family-kosugi',
    ];

    var all_concepts = [].concat(HIRAGANA_CONCEPTS, KATAKANA_CONCEPTS, NOUN_CONCEPTS);

    var stats = function() {
        var item = localStorage.getItem('stats');
        if (item === null) {
            return {
                global: {
                    waterline_index: 0,
                }
            };
        } else {
            return JSON.parse(item);
        }
    }();

    function clear_local_storage() {
      localStorage.removeItem('stats');
      console.log('Local storatge is now', localStorage.getItem('stats'));
    }

    function get_concept(index) {
        return all_concepts[index];
    }

    function get_question_text(data) {
        function get_question_text_from_concept(concept, direction) {
            return concept[direction.direction_start];
        }
        return get_question_text_from_concept(data.answer, data.direction);
    }

    function get_question_answer_text(data) {
        function get_answer_text_from_concept(concept, direction) {
            return concept[direction.direction_end];
        }
        return get_answer_text_from_concept(data.answer, data.direction);
    }

    function get_answer_text(data, position) {
        function get_answer_text_from_concept(concept, direction) {
            return concept[direction.direction_end];
        }
        return get_answer_text_from_concept(data.concepts[position], data.direction);
    }

    // This provides a concept filter based on the first character of the concept id
    function id_prefix_match(letter_string) {
      var letter = letter_string.charAt(0);
      return function (concept) {
        var concept_id = concept.id;
        var concept_id_prefix = concept_id.charAt(0);
        return letter == concept_id_prefix;
      };
    }

    function make_direction(question, answer, function_match) {
      return {
        direction_name: question + '__to__' + answer,
        direction_start: question,
        direction_end: answer,
        function_match: function_match,
      };
    }

    var INITIAL_WATERLINE = 15;
    var TOO_SOON_SIZE = 6;

    var data = {

        // It seems like Vue can only bind to a property that is
        // explicitly declared like this. This only bothers me because it
        // took me because it took a while to figure this out.
        //
        //
        // When showing the focus area dialog, we will allow the user
        // to adjust what kind of stuff they want to see.
        show_focus_area_dialog: false,

        selected_concepts: ['hiragana'],

        // TODO(jawilson): Originally, I thought an algorithm could
        // determine when to advance to the next set of questions but
        // that really interfered with my ability to expand the
        // dictionary (solveable) and also this didn't really work for me
        // with the couple of simple algorithms I tried (why be too
        // clever). Instead, allowing users to turn on and *off*
        // different broad categories to control their own learning is
        // what I would want so that is the goal now.
    
        // The maximum question to present. The waterline will be
        // increased as the confidence in the concepts beneath the
        // waterline raises above a threshold.
        waterline_index: stats.global && stats.global.waterline_index ? stats.global.waterline_index : INITIAL_WATERLINE,

        // The current "direction" of the question
        direction: make_direction('hiragana', 'romaji', 'h'),

        // These are the "answers" that will be present.
        concepts: [],

        // The current answer we are looking for which should obviously be present in concepts
        answer: {},

        // When true, show the correct answer dialog
        show_correct: false,

        // When true, show the wrong answer dialog
        show_wrong: false,

        // when true, show the debug extra information
        debug: false,

        session_question_number: 0,
        session_correct_number: 0,

        // functions used during rendering
        get_question_text: get_question_text,
        get_question_answer_text: get_question_answer_text,
        get_answer_text: get_answer_text,
        get_concept: get_concept,
        font_family: FONT_FAMILIES[0],
    };

    // Use the "selected_concepts" the user has choosen to determine
    // which directions to show.

    function get_directions() {
      var result = [];
      if (data.selected_concepts.includes("hiragana")) {
        result.push(make_direction('romaji', 'hiragana', id_prefix_match('h')));
        result.push(make_direction('hiragana', 'romaji', id_prefix_match('h')));
      }
      if (data.selected_concepts.includes("katakana")) {
        result.push(make_direction('romaji', 'katakana', id_prefix_match('k')));
        result.push(make_direction('katakana', 'romaji', id_prefix_match('k')));
      }
      if (data.selected_concepts.includes("nouns")) {
        result.push(make_direction('hiragana', 'english', id_prefix_match('n')));
        result.push(make_direction('english', 'hiragana', id_prefix_match('n')));
      }
      console.log("directions", result);
      return result;
    }

    function check_answer(index) {
        data.show_correct = (data.concepts[index].id == data.answer.id);
        data.show_wrong = !data.show_correct;
    }

    function select_next_question() {   
        update_statistics();
        data.show_correct = data.show_wrong = false;

        maybe_increase_waterline();

        var direction = random_element(get_directions());
        console.log('direction is ', direction);

        var concepts = get_sorted_concepts(direction);
        var question = get_best_question_data(concepts, direction);
        data.concepts = question.concepts;
        data.answer = question.answer;
        data.direction = direction;
        data.question_score = question.score;
        console.log("data", data);
    }

    function get_random_scored_concept(sorted_concepts) {
        var random = 1.0;
        for (var i = 0; i < 8; i++) {
            var next = Math.random();
            if (next < random) {
                random = next;
            }
        }
        var index = Math.floor(random * sorted_concepts.length);
        var concept = sorted_concepts[index];
        // console.log("random_concept", sorted_concepts, random, index, concept);
        return concept;
    }

    function update_statistics() {
        if (!stats.global) {
            stats.global = {};
        }
        stats.global.waterline_index = data.waterline_index;

        console.log(data.answer);
        var question_id = data.answer.id;
        var direction_name = data.direction.direction_name;
        add_last_answer(question_id);
        console.log('direction_name', direction_name);
        var stat = get_stat(question_id);
        if (data.show_correct) {
            increment_direction_statistic(stat, direction_name, 'correct');
            data.session_correct_number += 1;
        } else {
            increment_direction_statistic(stat, direction_name, 'wrong');
        }
        data.session_question_number += 1;
        if (data.session_question_number >= SESSION_QUESTIONS) {
          data.session_question_number = data.session_correct_number = 0;
        }
        stats[question_id] = stat;
        localStorage.setItem("stats", JSON.stringify(stats));
        console.log('stats is', stats);
    }

    var last_answers = [];

    function add_last_answer() {
      last_answers.push(data.answer.id);
      if (last_answers.length > TOO_SOON_SIZE) {
        last_answers.shift();
      }
    }

    function is_too_early(question) {
      return (last_answers.indexOf(question.answer.id) >= 0);
    }

    function increment_direction_statistic(stat, direction_name, property_name) {
      stat[direction_name] = stat[direction_name] ? stat[direction_name] : {
        correct: {},
        wrong: {},
        last_correct_time: {},
        last_wrong_time: {},
      };
      stat[direction_name][property_name] = stat[direction_name][property_name]
        ? 0
        : stat[direction_name][property_name];
      stat[direction_name][property_name] = stat[direction_name][property_name] + 1;
      stat[direction_name]['last_' + property_name + '_time'] = new Date().getTime();
      stat['all_' + property_name] = stat['all_' + property_name] ? (stat['all_' + property_name] + 1) : 1;
      stat.all_last_answers = update_last_answers(stat.all_last_answers, property_name);
      console.log("modified stat is", stat);
    }

    function update_last_answers(last_answers, property_name) {
        var bit = (property_name == 'correct') ? 1 : 0;
        // Just keep the last 24 latest answers as this will save a bit of
        // space and answers older than that are of less value
        return (((last_answers ? last_answers : 0) << 1) & 0xffffff) | bit;
    }

    function last_answers_to_confidence(last_answers) {
        var last_four = (last_answers ? last_answers : 0) & 0xf;
        var result = 0.0;
        if (last_four & 0x1) {
            result += 0.50;
        }
        if (last_four & 0x2) {
            result += 0.25;
        }
        if (last_four & 0x4) {
            result += 0.15;
        }
        if (last_four & 0x8) {
            result += 0.10;
        }
        return result;
    }

    function get_stat(question_id) {
        return stats[question_id]
            ? stats[question_id]
            : {};
    }

    function maybe_increase_waterline() {
        if (data.waterline_index >= all_concepts.length) {
            console.log("no more concepts versus waterline");
            return;
        }
        var not_correct = all_not_correct_in_any_direction();
        console.log("all not correct " + not_correct);
        if (not_correct > 8) {
            console.log("too many concepts never answered correctly to increase waterline");
            return;
        }
        var average_score = compute_average_score();
        if (average_score > 0.80) {
            console.log("increasing waterline as average score is above 80%", average_score);
            data.waterline_index += 1;
            console.log("increased waterline to ", data.waterline_index);
        } else {
            console.log("keeping waterline at ", data.waterline_index);
            console.log("not increasing waterline since average is below 80%", average_score);
        }
    }

    function all_not_correct_in_any_direction() {
        var result = 0;
        for (var i = 0; i < data.waterline_index; i++) {
            result += number_of_directions_never_correct(all_concepts[i]);
        }
        return result;
    }

    function number_of_directions_never_correct(concept) {
        var concept_id = concept.id;
        var stat = get_stat(concept_id);
        var concept_id_prefix = concept_id.charAt(0);
        var result = 0;
        for (var j = 0; j < get_directions().length; j++) {
            var direction = get_directions()[j];
            if (direction.function_match(concept)) {
                if (!stat[direction.direction_name]
                    || !stat[direction.direction_name].correct
                    || stat[direction.direction_name].correct <= 0) {
                    result += 1;
                }
            }
        }
        return result;
    }

    function compute_average_score() {
        var total_confidence = 0.0;
        var total_count = 0;
        for (var i = 0; i < data.waterline_index; i++) {
            var question_id = all_concepts[i].id;
            var stat = get_stat(question_id);
            if ('all_last_answers' in stat) {
                total_confidence += last_answers_to_confidence(stat.all_last_answers);
                total_count += 1;
            }
        }
        if (total_count == 0) {
            return 0.0;
        }
        return  total_confidence / total_count;
    }
        
    function get_best_question_data(sorted_concepts, direction) {
        var now = new Date().getTime();

        // Select the highest scoring question according the question
        // scoring function which looks for concepts that haven't been
        // answered correctly in the longest amount of time, etc.

        var question = get_question_data(sorted_concepts, now, direction);
        for (var i = 0; i < 1000; i++) {
            var q2 = get_question_data(sorted_concepts, now, direction);
            if (q2.score > question.score && 
                !is_too_early(question)) {
                question = q2;
            }
        }
        return question;
    }

    function get_question_data(sorted_concepts, now, direction) {
        var result = {};
        result.concepts = [];
        var number_of_concepts = 2 + Math.floor(Math.random() * 4);
        for (var i = 0; i < number_of_concepts; i++) {
            while (true) {
                var concept = get_random_scored_concept(sorted_concepts).concept;
                if (!concept) {
                    throw "concept is not true";
                }
                if (result.concepts.indexOf(concept) < 0) {
                    result.concepts.push(concept);
                    break;
                }
            }
        }
        // console.log("get_question_data", result);
        var index = Math.floor(Math.random() * result.concepts.length);
        result.answer = result.concepts[index];
        result.direction = direction;
        result.score = score_question(now, result, direction);
        return result;
    }

    function score_question(now, result, direction) {
        var score = 0.0;
        var total_directions_never_correct = 0;
        for (var i = 0; i < result.concepts.length; i++) {
            var concept = result.concepts[i];
            var stat = get_stat(concept);
            score += (now - ((stat[direction.direction_name])
                             && (stat[direction.direction_name].last_correct_time)
                             ? (stat[direction.direction_name].last_correct_time)
                             : 0));
            total_directions_never_correct += number_of_directions_never_correct(concept);
        }
        score = (score / result.concepts.length);
        if (total_directions_never_correct > 0) {
            score *= total_directions_never_correct;
        }
        // bump up the score if the answer has been answered correctly less than 10 times
        var concept = result.answer;
        var stat = get_stat(concept);
        var stat_all_correct = (stat.all_correct ? stat.all_correct : 0);
        if (stat_all_correct < 1) {
            score *= 2.2;
        } if (stat_all_correct < 2) {
            score *= 2.0;
        } else if (stat_all_correct < 4) {
            score *= 1.8;
        } else if (stat_all_correct < 6) {
            score *= 1.6;
        } else if (stat_all_correct < 8) {
            score *= 1.4;
        } else if (stat_all_correct < 10) {
            score *= 1.2;
        }
        if (number_of_directions_never_correct(concept)) {
            score *= 2.5;
        }
        return score;
    }

    function score_concept(concept) {
        var score = 0.0;
        var total_directions_never_correct = number_of_directions_never_correct(concept);
        if (total_directions_never_correct > 0) {
            return 1.0 * total_directions_never_correct;
        }
        var stat = get_stat(concept.id);
        if ('all_last_answers' in stat) {
            var result = 1.0 - last_answers_to_confidence(stat.all_last_answers);
            return result;
        } else {
            return 1.0;
        }
    }

    function get_sorted_concepts(direction) {
        var array = [];
        // FIXME should be &&
        for (var i = 0; i < data.waterline_index || i < all_concepts.length; i++) {
            var concept = all_concepts[i];
            if (direction.function_match(concept)) {
               array.push({
                     score: score_concept(concept),
                         concept: concept,
               });
           }
        }
        array.sort(function (a, b) {return b.score - a.score;});
        return array;
    }

    function show_debug() {
        data.debug = true;
    }

    function hide_debug() {
        data.debug = false;
    }

    function change_font() {
        var new_font_family = '';
        do {
          new_font_family = random_element(FONT_FAMILIES);
        } while (new_font_family == data.font_family);
        data.font_family = new_font_family;
        console.log(data.font_family);
    }

    function random_element(items) {
      return items[Math.floor(Math.random() * items.length)];
    }

    function show_focus_area_dialog_fn() {
      data.show_focus_area_dialog = true;
    }

    function hide_focus_area_dialog() {
      data.show_focus_area_dialog = false;
    }

    var app = new Vue({
        el: '#app',
        data: data,
    });

    select_next_question();
