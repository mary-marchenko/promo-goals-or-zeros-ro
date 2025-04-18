"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var _sessionStorage$getIt, _document$querySelect3, _sessionStorage$getIt2;
  var apiURL = 'https://fav-prom.com/api_predictor_football_ro',
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    youAreInBtns = document.querySelectorAll('.took-part'),
    mainPage = document.querySelector(".fav-page"),
    resultsTable = document.querySelector('#results-table'),
    resultsTableOther = document.querySelector('#results-table-other'),
    placeBetBtn = document.querySelector(".predict-btn"),
    lastPredict = document.querySelector(".predict__last"),
    topForecast = document.querySelector(".topForecast");
  var currentTab = Number(document.querySelector(".predict__tabs-date.active").getAttribute("data-match-number"));
  var currentTabTable = Number(document.querySelector(".table__tabs-date.active").getAttribute("data-match-number"));
  var matchNumber = Number(document.querySelector(".predict__container.active").getAttribute("data-match-number"));
  var showTopForecast = true;
  var FIRST_MATCH_DATE = new Date('2025-04-29T22:00:00'); // дата матчу
  var SECOND_MATCH_DATE = new Date('2025-04-30T22:00:00'); // дата матчу
  var THIRD_MATCH_DATE = new Date('2025-05-06T22:00:00'); // дата матчу
  var FOURTH_MATCH_DATE = new Date('2025-05-07T22:00:00'); // дата матчу
  var currentDate = new Date();
  function lockMatchContainer(matchDate, matchNumber) {
    if (new Date() > matchDate) {
      var _containers = document.querySelectorAll(".predict__container[data-match-number=\"".concat(matchNumber, "\"]"));
      var tab = document.querySelector(".predict__tabs-date.active[data-match-number=\"".concat(matchNumber, "\"]"));
      _containers.forEach(function (container) {
        container.classList.add('_lock');
      });
      if (tab) {
        placeBetBtn.classList.add("_lock");
      }
    }
  }
  lockMatchContainer(FIRST_MATCH_DATE, 1); // Для першого матчу
  lockMatchContainer(SECOND_MATCH_DATE, 2); // Для другого матчу
  lockMatchContainer(THIRD_MATCH_DATE, 3); // Для третього матчу
  lockMatchContainer(FOURTH_MATCH_DATE, 4); // Для четвертого матчу

  setInterval(function () {
    var currentDate = new Date(); // Оновити поточну дату
    lockMatchContainer(FIRST_MATCH_DATE, 1);
    lockMatchContainer(SECOND_MATCH_DATE, 2);
    lockMatchContainer(THIRD_MATCH_DATE, 3);
    lockMatchContainer(FOURTH_MATCH_DATE, 4);
  }, 600000); // Оновлювати кожні 10 хв
  var Bet = /*#__PURE__*/function () {
    function Bet(userId, matchNumber) {
      var team1Goals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var team2Goals = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var firstGoal = arguments.length > 4 ? arguments[4] : undefined;
      _classCallCheck(this, Bet);
      if (userId !== null) this.userid = userId;
      this.matchNumber = matchNumber;
      this.team1 = team1Goals;
      this.team2 = team2Goals;
      if (firstGoal !== undefined) this.firstGoal = firstGoal;
    }
    _createClass(Bet, [{
      key: "updateGoals",
      value: function updateGoals(team1Goals, team2Goals) {
        if (team1Goals !== undefined) {
          this.team1 = team1Goals !== null ? team1Goals : this.team1;
        }
        if (team2Goals !== undefined) {
          this.team2 = team2Goals !== null ? team2Goals : this.team2;
        }
        this.goalsUpdated = true;
      }
    }, {
      key: "updateFirstGoal",
      value: function updateFirstGoal(firstGoal) {
        if (firstGoal !== undefined) {
          this.firstGoal = firstGoal !== null ? firstGoal : this.firstGoal;
        }
        this.firstGoalUpdated = true;
      }
    }]);
    return Bet;
  }();
  var cache = {};
  var predictData = [];
  var translateState = true;
  var debug = false;
  var locale = (_sessionStorage$getIt = sessionStorage.getItem("locale")) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "ro";
  // let locale = "uk"

  var roLeng = document.querySelector('#roLeng');
  var enLeng = document.querySelector('#enLeng');
  var i18nData = {};
  var userId;
  // userId = 100300268;

  var currentBet;
  if (roLeng) locale = 'ro';
  if (enLeng) locale = 'en';
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      return res.json();
    });
  };
  var getLastBet = function getLastBet(bets, matchNumber) {
    if (!bets) return false;
    return bets.find(function (bet) {
      return bet.matchNumber === matchNumber;
    });
  };
  function refreshBetInfo(userId) {
    var score1 = document.querySelector(".score-1");
    var score2 = document.querySelector(".score-2");
    var score3 = document.querySelector(".score-3");
    var score4 = document.querySelector(".score-4");
    var goal1 = document.querySelector(".goal-1");
    var goal2 = document.querySelector(".goal-2");
    var goal3 = document.querySelector(".goal-3");
    var goal4 = document.querySelector(".goal-4");
    var matchNumber = Number(document.querySelector(".predict__tabs-date.active").getAttribute("data-match-number"));

    // console.log(matchNumber)

    request("/favuser/".concat(userId), {
      method: 'GET'
    }).then(function (data) {
      if (data.bets) {
        var betAvailable = data.bets.some(function (bet) {
          return bet.matchNumber === matchNumber;
        });
        // console.log(betAvailable)
        var lastTeam1 = document.querySelector(".predict__last-team.team1");
        var lastTeam2 = document.querySelector(".predict__last-team.team2");
        var scoreTeam1 = document.querySelector(".scoreTeam1");
        var scoreTeam2 = document.querySelector(".scoreTeam2");
        var firstGoal = document.querySelector(".predict__last-country");
        if (betAvailable) {
          lastPredict.classList.remove("hide");
          var lastBet = getLastBet(data.bets, matchNumber);
          scoreTeam1.textContent = lastBet.team1 === undefined ? "-" : "".concat(lastBet.team1);
          scoreTeam2.textContent = lastBet.team2 === undefined ? "-" : "".concat(lastBet.team2);
          // console.log(lastBet)

          if (lastBet.betConfirmed) {
            document.querySelectorAll(".predict__last-result.unconfirmed").forEach(function (item) {
              item.classList.remove("active");
            });
            document.querySelectorAll(".predict__last-result.confirmed").forEach(function (item) {
              item.classList.add("active");
            });
          } else {
            document.querySelectorAll(".predict__last-result.unconfirmed").forEach(function (item) {
              item.classList.add("active");
            });
            document.querySelectorAll(".predict__last-result.confirmed").forEach(function (item) {
              item.classList.remove("active");
            });
          }
          if (lastBet.matchNumber === 1) {
            lastTeam1.setAttribute("data-translate", "ukraine");
            lastTeam2.setAttribute("data-translate", "belgium");
            translate();
          }
          if (lastBet.matchNumber === 2) {
            lastTeam2.setAttribute("data-translate", "ukraine");
            lastTeam1.setAttribute("data-translate", "belgium");
            translate();
          }
          if (lastBet.matchNumber === 3) {
            lastTeam2.setAttribute("data-translate", "ukraine");
            lastTeam1.setAttribute("data-translate", "belgium");
            translate();
          }
          if (lastBet.matchNumber === 4) {
            lastTeam2.setAttribute("data-translate", "ukraine");
            lastTeam1.setAttribute("data-translate", "belgium");
            translate();
          }
          if (score1.classList.contains("active") || score2.classList.contains("active")) {
            document.querySelector(".predict__last-score").classList.remove("hide");
            document.querySelector(".predict__last-goal").classList.add("hide");
          }
          if (goal1.classList.contains("active") || goal2.classList.contains("active")) {
            document.querySelector(".predict__last-score").classList.add("hide");
            document.querySelector(".predict__last-goal").classList.remove("hide");
          }
          if (lastBet.firstGoal) {
            if (lastBet.firstGoal === "ua") {
              firstGoal.setAttribute("data-translate", "ukraine");
            }
            if (lastBet.firstGoal === "be") {
              firstGoal.setAttribute("data-translate", "belgium");
            }
            if (lastBet.firstGoal === "draw") {
              firstGoal.setAttribute("data-translate", "draw");
            }
          } else {
            if (goal1.classList.contains("active") || goal2.classList.contains("active")) {
              document.querySelector(".predict__last").classList.add("hide");
            }
          }
        }
        if (!betAvailable) {
          lastPredict.classList.add("hide");
        }
      } else {
        lastPredict.classList.add("hide");
      }
    })["catch"](function (error) {
      console.error('Error:', error);
    });
  }
  var InitPage = function InitPage() {
    checkUserAuth();
    renderUsers();
    updateTopForecasts(currentTab);
    refreshBetInfo(userId);
  };
  var checkUserAuth = function checkUserAuth() {
    if (userId) {
      youAreInBtns.forEach(function (item) {
        return item.classList.remove('hide');
      });
      unauthMsgs.forEach(function (item) {
        return item.classList.add('hide');
      });
    } else {
      var _iterator = _createForOfIteratorHelper(youAreInBtns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var youAreInBtn = _step.value;
          youAreInBtn.classList.add('hide');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(unauthMsgs),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var unauthMes = _step2.value;
          unauthMes.classList.remove('hide');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  };
  function placeBet(bet) {
    if (!userId) {
      return;
    }
    document.querySelector(".predict__container.active").querySelectorAll('.predict__team-increase, .predict__team-decrease').forEach(function (btn) {
      scoreInit(btn);
    });
    var activeTabs = document.querySelectorAll(".goalCont");
    // const activeInput = activeTab.querySelector(".predict__radio-item input")

    var req = {
      matchNumber: bet.matchNumber,
      userid: bet.userid
    };

    // console.log(activeTabs)
    var _iterator3 = _createForOfIteratorHelper(activeTabs),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var tab = _step3.value;
        if (tab.classList.contains("active")) {
          var activeInput = tab.querySelector(".predict__radio-item._active input");
          // console.log(tab)

          if (activeInput) {
            // console.log(activeInput)
            req.firstGoal = activeInput.value;
            break;
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (bet.firstGoalUpdated) {
      // console.log(bet.firstGoal)
      req.firstGoal = bet.firstGoal;
    }
    if (bet.goalsUpdated) {
      req.team1 = bet.team1;
      req.team2 = bet.team2;
    }

    // console.log(activeInput);
    // console.log(activeTab)

    request('/bet', {
      method: 'POST',
      body: JSON.stringify(req)
    }).then(function (res) {
      // console.log('Bet placed:', res);
      InitPage();
    })["catch"](function (error) {
      return console.error('Error placing bet:', error);
    });
  }
  function loadTranslations() {
    return fetch("".concat(apiURL, "/new-translates/").concat(locale)).then(function (res) {
      return res.json();
    }).then(function (json) {
      i18nData = json;
      console.log(i18nData);
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        translate();
      });
      mutationObserver.observe(document.getElementById('goals-or-zeros'), {
        childList: true,
        subtree: true
      });
    });
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (translateState) {
      elems.forEach(function (elem) {
        var key = elem.getAttribute('data-translate');
        elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
        elem.removeAttribute('data-translate');
      });
    } else {
      console.log("translation work!");
    }
    refreshLocalizedClass(mainPage);
  }
  function refreshLocalizedClass(element) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(lang);
    }
    element.classList.add(locale);
  }
  function init() {
    if (window.store) {
      var state = window.store.getState();
      userId = state.auth.isAuthorized && state.auth.id || '';
      // currentBet = new Bet(userId, matchNumber)
      InitPage();
    } else {
      InitPage();
      var c = 0;
      var i = setInterval(function () {
        if (c < 50) {
          if (!!window.g_user_id) {
            userId = window.g_user_id;
            InitPage();
            clearInterval(i);
          }
        } else {
          clearInterval(i);
        }
      }, 200);
    }
    InitPage();
    placeBetBtn.addEventListener('click', function (e) {
      e.preventDefault();
      // console.log(currentBet)
      if (currentBet) {
        placeBet(currentBet);
      }
      if (currentBet === undefined) {
        currentBet = new Bet(userId, matchNumber);
        placeBet(currentBet);
        // console.log(currentBet)
      }
    });
  }

  function updateScore(matchNumber, team1Goals, team2Goals) {
    if (currentBet && currentBet.matchNumber === matchNumber) {
      currentBet.updateGoals(team1Goals, team2Goals);
    } else {
      currentBet = new Bet(userId, matchNumber, team1Goals, team2Goals);
      currentBet.updateGoals(team1Goals, team2Goals);
    }
    // console.log(currentBet);
  }

  function updateFirstGoal(matchNumber, firstGoal) {
    if (currentBet && currentBet.matchNumber === matchNumber) {
      currentBet.updateFirstGoal(firstGoal);
    }

    // console.log(currentBet);
  }

  function updateTopForecasts(matchNumber) {
    request("/users/".concat(matchNumber)).then(function (data) {
      // console.log(data.topForecasts); // Перевірка отриманих даних

      var forecastsContainer = document.querySelector('.predict__forecasts');
      forecastsContainer.innerHTML = '';
      data.topForecasts.forEach(function (forecast) {
        var _forecast$forecast;
        var forecastItem = document.createElement('div');
        forecastItem.classList.add('predict__forecasts-item');
        var percentage = parseFloat(forecast.percentage).toFixed(1);
        var percentageSpan = document.createElement('span');
        percentageSpan.textContent = "".concat(percentage, "%");
        var forecastText = document.createTextNode(" ".concat((_forecast$forecast = forecast.forecast) !== null && _forecast$forecast !== void 0 ? _forecast$forecast : "0-0"));
        forecastItem.appendChild(percentageSpan);
        forecastItem.appendChild(forecastText);
        forecastsContainer.appendChild(forecastItem);
      });
    })["catch"](function (error) {
      console.error('Error fetching top forecasts:', error);
    });
  }
  function renderUsers() {
    console.log('рендер працює');
    request("/users/".concat(currentTabTable)).then(function (data) {
      var users = data.users;

      // console.log(users)
      var isScoreTabActive = document.querySelector('.predict__tabs-score.active');
      var isGoalTabActive = document.querySelector('.predict__tabs-goal.active');
      if (users.length >= 50) {
        showTopForecast = true;
      }
      if (users.length < 50) {
        showTopForecast = false;
      }
      if (isScoreTabActive && showTopForecast) topForecast.classList.remove("hide");
      if (isGoalTabActive) topForecast.classList.add("hide");

      // console.log(typeof userId)

      populateUsersTable(users, userId, currentTabTable);

      // console.log(users)
    });
  }

  function populateUsersTable(users, currentUserId, matchNumber) {
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!users || !users.length) return;

    // // Фільтруємо користувачів, які зробили ставку на вказаний матч
    // const users = users.filter(user =>
    //     user.bets.some(bet => bet.matchNumber === matchNumber)
    // );

    // if (!users.length) return;

    // Знаходимо поточного користувача
    var currentUser = users.find(function (user) {
      return user.userid === currentUserId;
    });

    // Виводимо всіх інших користувачів у resultsTable
    users.forEach(function (user) {
      if (user.userid !== currentUserId) {
        displayUser(user, false, resultsTable, users, matchNumber);
      }
    });

    // Виводимо поточного користувача в resultsTableOther
    if (currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, matchNumber);
    }
  }
  function displayUser(user, isCurrentUser, table, allUsers, matchNumber) {
    var matchDate;
    if (matchNumber === 1) {
      matchDate = FIRST_MATCH_DATE;
    }
    if (matchNumber === 2) {
      matchDate = SECOND_MATCH_DATE;
    }
    if (matchNumber === 3) {
      matchDate = THIRD_MATCH_DATE;
    }
    if (matchNumber === 4) {
      matchDate = FOURTH_MATCH_DATE;
    }
    var additionalUserRow = document.createElement('div');
    additionalUserRow.classList.add('table__row');
    additionalUserRow.innerHTML = "\n        <div class=\"table__row-item\">".concat(isCurrentUser ? user.userid : maskUserId(user.userid), "</div>\n        <div class=\"table__row-item\">\n            ").concat(currentDate >= matchDate ? "<span>".concat(user.team1 !== undefined && user.team1 !== null ? user.team1 : "-", "</span><img src=\"https://fav-prom.com/html/goals-or-zeroes/img/vs.png\" alt=\"vs\"><span>").concat(user.team2 !== undefined && user.team2 !== null ? user.team2 : "-", "</span>") : "<span>**</span><img src=\"https://fav-prom.com/html/goals-or-zeroes/img/vs.png\" alt=\"vs\"><span>**</span>", "\n        </div>\n        \n        ").concat(user.winner === true ? "<div class=\"table__row-item\" data-translate=\"prize\">*****</div>" : "<div class=\"table__row-item\" data-translate=\"noWinners\">*****</div>", "\n        \n        ").concat(user.bonusFirstGoal === true ? "<div class=\"table__row-item\" data-translate=\"ss500\">*****</div>" : "<div class=\"table__row-item\" data-translate=\"noWinners\">*****</div>", "\n    ");
    if (isCurrentUser) {
      additionalUserRow.classList.add("you");
      additionalUserRow.innerHTML = "\n            <div class=\"table__row-item\">".concat(isCurrentUser ? user.userid : maskUserId(user.userid), "</div>\n            <div class=\"table__row-item\">\n                <span>").concat(user.team1 !== undefined && user.team1 !== null ? user.team1 : "-", "</span><img src=\"https://fav-prom.com/html/goals-or-zeroes/img/vs.png\" alt=\"vs\"><span>").concat(user.team2 !== undefined && user.team2 !== null ? user.team2 : "-", "</span>\n            </div>\n            ").concat(user.winner === true ? "<div class=\"table__row-item\" data-translate=\"prize\">*****</div>" : "<div class=\"table__row-item\" data-translate=\"noWinners\">*****</div>", "\n        \n            ").concat(user.bonusFirstGoal === true ? "<div class=\"table__row-item\" data-translate=\"ss500\">*****</div>" : "<div class=\"table__row-item\" data-translate=\"noWinners\">*****</div>", "\n        ");
      var youBlock = document.createElement('div');
      youBlock.classList.add('table__row-you');
      youBlock.setAttribute('data-translate', 'tableYou');
      // youBlock.textContent = "You";
      additionalUserRow.insertBefore(youBlock, additionalUserRow.children[1]);
    }
    table.append(additionalUserRow);
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }

  // 3D anim
  var cards = document.querySelectorAll(".team, .animCard, .animRight"); // Добавляем .animRight
  var angle = 0;
  function animateCards() {
    angle += 0.9; // speed
    var rotateX = Math.sin(angle * (Math.PI / 180)) * 10; // Колебание по X
    var rotateY = Math.cos(angle * (Math.PI / 180)) * 10; // Колебание по Y

    cards.forEach(function (card) {
      if (card.classList.contains("animRight")) {
        card.style.transform = "rotateY(".concat(-rotateY, "deg) rotateX(").concat(-rotateX, "deg)");
      } else {
        card.style.transform = "rotateY(".concat(rotateY, "deg) rotateX(").concat(rotateX, "deg)");
      }
    });
    requestAnimationFrame(animateCards);
  }
  animateCards();

  // predict tabs
  var tabs = document.querySelectorAll('.predict__tabs-global > div, .predict__tabs-dates > div');
  var containers = document.querySelectorAll('.predict__container');
  function handleTabClick(event) {
    var matchDate;
    var clickedTab = event.target.closest(".predict__tabs-date") || event.target.closest(".predict__tabs-goal") || event.target.closest(".predict__tabs-score");
    // console.log(clickedTab)
    var tabPair = clickedTab.closest('.predict__tabs-global') || clickedTab.closest('.predict__tabs-dates');
    var currentMatch = Number(clickedTab.getAttribute("data-match-number"));

    // console.log(clickedTab)

    if (currentMatch === 1) {
      matchDate = FIRST_MATCH_DATE;
    }
    if (currentMatch === 2) {
      matchDate = SECOND_MATCH_DATE;
    }
    if (currentMatch === 3) {
      matchDate = THIRD_MATCH_DATE;
    }
    if (currentMatch === 4) {
      matchDate = FOURTH_MATCH_DATE;
    }
    if (currentDate > matchDate) {
      placeBetBtn.classList.add("_lock");
    } else {
      placeBetBtn.classList.remove("_lock");
    }
    if (clickedTab.classList.contains('active')) return;
    if (tabPair) {
      var pair = tabPair.querySelectorAll('.active');
      if (pair.length > 0) {
        pair[0].classList.remove('active');
      }
    }
    clickedTab.classList.add('active');
    updateContainers();
    // refreshBetInfo(userId)
    if (clickedTab.closest('.predict__tabs-dates')) {
      updateTopForecasts(currentMatch);
      currentBet = new Bet(userId, currentMatch);
      matchNumber = Number(clickedTab.getAttribute("data-match-number"));
      document.querySelectorAll(".predict__team-number").forEach(function (score, i) {
        // console.log(matchDate, matchNumber)
        if (currentDate > matchDate && i === 1 && matchNumber === 1) {
          score.textContent = "0";
        } else if (currentDate > matchDate && i === 0 && matchNumber === 1) {
          score.textContent = "0";
        }
        // else{
        //     score.textContent = "0"
        // }
      });

      document.querySelectorAll('input[type="radio"]:checked').forEach(function (button) {
        button.checked = false;
      });
    }
    lockMatchContainer(FIRST_MATCH_DATE, 1); // Для першого матчу
    lockMatchContainer(SECOND_MATCH_DATE, 2); // Для другого матчу
    lockMatchContainer(THIRD_MATCH_DATE, 3); // Для третього матчу
    lockMatchContainer(FOURTH_MATCH_DATE, 4); // Для четвертого матчу
  }

  tabs.forEach(function (tab) {
    return tab.addEventListener('click', handleTabClick);
  });
  function updateContainers() {
    containers.forEach(function (container) {
      return container.classList.remove('active');
    });
    var isScoreTabActive = document.querySelector('.predict__tabs-score.active');
    var isGoalTabActive = document.querySelector('.predict__tabs-goal.active');
    var isDate1Active = document.querySelector('.predict__tabs-date.date1.active');
    var isDate2Active = document.querySelector('.predict__tabs-date.date2.active');
    var isDate3Active = document.querySelector('.predict__tabs-date.date3.active');
    var isDate4Active = document.querySelector('.predict__tabs-date.date4.active');
    if (!!isScoreTabActive) {
      if (showTopForecast) {
        console.log("score");
        topForecast.classList.remove("hide");
      }
      if (isDate1Active) {
        document.querySelector('.predict__container.score-1').classList.add('active');
      } else if (isDate2Active) {
        document.querySelector('.predict__container.score-2').classList.add('active');
      } else if (isDate3Active) {
        document.querySelector('.predict__container.score-3').classList.add('active');
      } else if (isDate4Active) {
        document.querySelector('.predict__container.score-4').classList.add('active');
      }
    } else if (!!isGoalTabActive) {
      if (showTopForecast) {
        console.log("score");
        topForecast.classList.add("hide");
      }
      if (isDate1Active) {
        document.querySelector('.predict__container.goal-1').classList.add('active');
      } else if (isDate2Active) {
        document.querySelector('.predict__container.goal-2').classList.add('active');
      } else if (isDate3Active) {
        document.querySelector('.predict__container.goal-3').classList.add('active');
      } else if (isDate4Active) {
        document.querySelector('.predict__container.goal-4').classList.add('active');
      }
    }
  }

  //score

  function scoreInit(btn) {
    var teamControl = btn.closest('.predict__team-control');
    var teamNumber = teamControl.querySelector('.predict__team-number');
    var matchContainer = btn.closest('.predict__container');
    var matchNumber = parseInt(matchContainer.dataset.matchNumber);
    var getGoals = function getGoals(team) {
      var element = matchContainer.querySelector("[data-team=\"".concat(team, "\"] .predict__team-number"));
      return element ? Number(element.textContent) || 0 : 0;
    };
    var team1Goals = getGoals('team1');
    var team2Goals = getGoals('team2');

    // console.log(team1Goals, team2Goals)

    updateScore(matchNumber, team1Goals, team2Goals);
  }
  document.querySelectorAll('.predict__team-increase, .predict__team-decrease').forEach(function (btn) {
    btn.addEventListener("click", function () {
      var teamControl = btn.closest('.predict__team-control');
      var teamNumber = teamControl.querySelector('.predict__team-number');
      var matchContainer = btn.closest('.predict__container');
      var value = parseInt(teamNumber.textContent);
      if (btn.classList.contains('predict__team-increase')) {
        value += 1;
      } else if (value > 0) {
        value -= 1;
      }
      teamNumber.textContent = "".concat(value);
      scoreInit(btn);
      // console.log(bet)
    });
  });

  //table tabs
  document.querySelectorAll('.table__tabs-date').forEach(function (tab) {
    tab.addEventListener('click', function () {
      if (this.classList.contains('active')) {
        return;
      }
      document.querySelectorAll('.table__tabs-date').forEach(function (tab) {
        return tab.classList.remove('active');
      });
      this.classList.add('active');
      currentTabTable = Number(document.querySelector(".table__tabs-date.active").getAttribute("data-match-number"));
      renderUsers();
    });
  });

  //popups

  function setPopups(triggerButtons, popupClass) {
    var popupsContainer = document.querySelector('.popups');
    var popup = document.querySelector(".popups__item.".concat(popupClass));
    var popupBtn = popupsContainer.querySelector(".popups__item-btn");
    if (!triggerButtons || !popup || !popupsContainer) return;
    triggerButtons.forEach(function (triggerButton) {
      triggerButton.addEventListener('click', function () {
        popupsContainer.classList.remove('_opacity');
        popupsContainer.classList.add(popupClass);
        document.body.style.overflow = 'hidden';
      });
    });
    var closeButton = popup.querySelector('.popups__item-close');
    var btnClose = popup.querySelector('.btn-close');
    popupsContainer.addEventListener("click", function (e) {
      if (e.target === popupsContainer || e.target === closeButton || e.target === btnClose) {
        closePopup();
      }
    });
    function closePopup() {
      popupsContainer.classList.add('_opacity');
      popupsContainer.classList.remove(popupClass);
      document.body.style.overflow = '';
    }
    // console.log(popupBtn)
    popupBtn.addEventListener("click", function (e) {
      closePopup();
    });
  }
  setPopups(document.querySelectorAll('.gide__list-btn'), 'gidePopup');
  setPopups(document.querySelectorAll('.predict__btn.took-part'), '_confirmPopup');

  //go to predict
  document.querySelector(".toPredict").addEventListener('click', function () {
    var targetElement = document.getElementById("predict");
    var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 2;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
  var radioContainers = document.querySelectorAll('.predict__radio');
  radioContainers.forEach(function (container) {
    var radioInputs = container.querySelectorAll('.predict__radio-item');
    radioInputs.forEach(function (radio) {
      radio.addEventListener('change', function () {
        radioInputs.forEach(function (item) {
          return item.classList.remove('_active');
        });
        this.classList.add('_active');
        // console.log(this.querySelector("input").value)

        updateFirstGoal(matchNumber, this.querySelector("input").value);
      });
    });
  });
  loadTranslations().then(init);

  // TEST
  document.querySelector('.dark-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "18908465");
    }
    window.location.reload();
  });
  document.querySelectorAll('.btn-lastPred').forEach(function (button) {
    button.addEventListener('click', function () {
      document.querySelectorAll('.predict__last').forEach(function (element) {
        element.classList.toggle('hide');
      });
    });
  });
  setPopups(document.querySelectorAll('.btn-thenks'), '_confirmPopup');
  document.querySelectorAll('.btn-predict').forEach(function (button) {
    button.addEventListener('click', function () {
      document.querySelectorAll('.unconfirmed').forEach(function (unconfirmed) {
        unconfirmed.classList.toggle('active');
      });
      document.querySelectorAll('.confirmed').forEach(function (confirmed) {
        confirmed.classList.toggle('active');
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
    });
  });
  (_document$querySelect3 = document.querySelector(".btn-after")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.addEventListener("click", function () {
    var FIRST_MATCH_DATE = new Date('2022-03-20T21:15:00');
    lockMatchContainer(FIRST_MATCH_DATE, 1);
    placeBetBtn.classList.add("_lock");
    console.log("lock table");
  });
  userId = (_sessionStorage$getIt2 = sessionStorage.getItem("userId")) !== null && _sessionStorage$getIt2 !== void 0 ? _sessionStorage$getIt2 : null;
  updateTopForecasts = function updateTopForecasts() {
    console.log('updateTopForecasts вимкнено для тесту');
  };
  populateUsersTable = function populateUsersTable() {
    console.log('populateUsersTable вимкнено для тесту');
  };
  displayUser = function displayUser() {
    console.log('displayUser вимкнено для тесту');
  };
  renderUsers = function renderUsers() {
    console.log('renderUsers вимкнено для тесту');
    // showTopForecast = true
  };
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwidW5hdXRoTXNncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInlvdUFyZUluQnRucyIsIm1haW5QYWdlIiwicXVlcnlTZWxlY3RvciIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwicGxhY2VCZXRCdG4iLCJsYXN0UHJlZGljdCIsInRvcEZvcmVjYXN0IiwiY3VycmVudFRhYiIsIk51bWJlciIsImdldEF0dHJpYnV0ZSIsImN1cnJlbnRUYWJUYWJsZSIsIm1hdGNoTnVtYmVyIiwic2hvd1RvcEZvcmVjYXN0IiwiRklSU1RfTUFUQ0hfREFURSIsIkRhdGUiLCJTRUNPTkRfTUFUQ0hfREFURSIsIlRISVJEX01BVENIX0RBVEUiLCJGT1VSVEhfTUFUQ0hfREFURSIsImN1cnJlbnREYXRlIiwibG9ja01hdGNoQ29udGFpbmVyIiwibWF0Y2hEYXRlIiwiY29udGFpbmVycyIsInRhYiIsImZvckVhY2giLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRJbnRlcnZhbCIsIkJldCIsInVzZXJJZCIsInRlYW0xR29hbHMiLCJ0ZWFtMkdvYWxzIiwiZmlyc3RHb2FsIiwidXNlcmlkIiwidGVhbTEiLCJ0ZWFtMiIsInVuZGVmaW5lZCIsImdvYWxzVXBkYXRlZCIsImZpcnN0R29hbFVwZGF0ZWQiLCJjYWNoZSIsInByZWRpY3REYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJkZWJ1ZyIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInJvTGVuZyIsImVuTGVuZyIsImkxOG5EYXRhIiwiY3VycmVudEJldCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRMYXN0QmV0IiwiYmV0cyIsImZpbmQiLCJiZXQiLCJyZWZyZXNoQmV0SW5mbyIsInNjb3JlMSIsInNjb3JlMiIsInNjb3JlMyIsInNjb3JlNCIsImdvYWwxIiwiZ29hbDIiLCJnb2FsMyIsImdvYWw0IiwibWV0aG9kIiwiZGF0YSIsImJldEF2YWlsYWJsZSIsInNvbWUiLCJsYXN0VGVhbTEiLCJsYXN0VGVhbTIiLCJzY29yZVRlYW0xIiwic2NvcmVUZWFtMiIsInJlbW92ZSIsImxhc3RCZXQiLCJ0ZXh0Q29udGVudCIsImJldENvbmZpcm1lZCIsIml0ZW0iLCJzZXRBdHRyaWJ1dGUiLCJ0cmFuc2xhdGUiLCJjb250YWlucyIsImVycm9yIiwiY29uc29sZSIsIkluaXRQYWdlIiwiY2hlY2tVc2VyQXV0aCIsInJlbmRlclVzZXJzIiwidXBkYXRlVG9wRm9yZWNhc3RzIiwieW91QXJlSW5CdG4iLCJ1bmF1dGhNZXMiLCJwbGFjZUJldCIsImJ0biIsInNjb3JlSW5pdCIsImFjdGl2ZVRhYnMiLCJyZXEiLCJhY3RpdmVJbnB1dCIsInZhbHVlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkVHJhbnNsYXRpb25zIiwibG9nIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZWxlbXMiLCJlbGVtIiwia2V5IiwiaW5uZXJIVE1MIiwicmVtb3ZlQXR0cmlidXRlIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJpbml0Iiwid2luZG93Iiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiYyIsImkiLCJnX3VzZXJfaWQiLCJjbGVhckludGVydmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVNjb3JlIiwidXBkYXRlR29hbHMiLCJ1cGRhdGVGaXJzdEdvYWwiLCJmb3JlY2FzdHNDb250YWluZXIiLCJ0b3BGb3JlY2FzdHMiLCJmb3JlY2FzdCIsImZvcmVjYXN0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJwZXJjZW50YWdlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJwZXJjZW50YWdlU3BhbiIsImZvcmVjYXN0VGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJ1c2VycyIsImlzU2NvcmVUYWJBY3RpdmUiLCJpc0dvYWxUYWJBY3RpdmUiLCJsZW5ndGgiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJhbGxVc2VycyIsImFkZGl0aW9uYWxVc2VyUm93IiwibWFza1VzZXJJZCIsIndpbm5lciIsImJvbnVzRmlyc3RHb2FsIiwieW91QmxvY2siLCJpbnNlcnRCZWZvcmUiLCJjaGlsZHJlbiIsImFwcGVuZCIsInRvU3RyaW5nIiwic2xpY2UiLCJjYXJkcyIsImFuZ2xlIiwiYW5pbWF0ZUNhcmRzIiwicm90YXRlWCIsIk1hdGgiLCJzaW4iLCJQSSIsInJvdGF0ZVkiLCJjb3MiLCJjYXJkIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0YWJzIiwiaGFuZGxlVGFiQ2xpY2siLCJldmVudCIsImNsaWNrZWRUYWIiLCJ0YXJnZXQiLCJjbG9zZXN0IiwidGFiUGFpciIsImN1cnJlbnRNYXRjaCIsInBhaXIiLCJ1cGRhdGVDb250YWluZXJzIiwic2NvcmUiLCJidXR0b24iLCJjaGVja2VkIiwiaXNEYXRlMUFjdGl2ZSIsImlzRGF0ZTJBY3RpdmUiLCJpc0RhdGUzQWN0aXZlIiwiaXNEYXRlNEFjdGl2ZSIsInRlYW1Db250cm9sIiwidGVhbU51bWJlciIsIm1hdGNoQ29udGFpbmVyIiwicGFyc2VJbnQiLCJkYXRhc2V0IiwiZ2V0R29hbHMiLCJ0ZWFtIiwic2V0UG9wdXBzIiwidHJpZ2dlckJ1dHRvbnMiLCJwb3B1cENsYXNzIiwicG9wdXBzQ29udGFpbmVyIiwicG9wdXAiLCJwb3B1cEJ0biIsInRyaWdnZXJCdXR0b24iLCJvdmVyZmxvdyIsImNsb3NlQnV0dG9uIiwiYnRuQ2xvc2UiLCJjbG9zZVBvcHVwIiwidGFyZ2V0RWxlbWVudCIsInRhcmdldFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwicmFkaW9Db250YWluZXJzIiwicmFkaW9JbnB1dHMiLCJyYWRpbyIsInRvZ2dsZSIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhdXRoQnRuIiwidW5jb25maXJtZWQiLCJjb25maXJtZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxZQUFZO0VBQUE7RUFDVCxJQUFNQSxNQUFNLEdBQUcsZ0RBQWdEO0lBQzNEQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0lBQ3RERSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM5Q0MsWUFBWSxHQUFHTCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN2REUsaUJBQWlCLEdBQUdOLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLHNCQUFzQixDQUFDO0lBQ2xFRyxXQUFXLEdBQUdQLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUNwREksV0FBVyxHQUFHUixRQUFRLENBQUNJLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN0REssV0FBVyxHQUFHVCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFFeEQsSUFBSU0sVUFBVSxHQUFHQyxNQUFNLENBQUNYLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUNRLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0VBQy9HLElBQUlDLGVBQWUsR0FBR0YsTUFBTSxD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aW9uICgpIHtcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3ByZWRpY3Rvcl9mb290YmFsbF9ybycsXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICB5b3VBcmVJbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vay1wYXJ0JyksXG4gICAgICAgIG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMtdGFibGUnKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cy10YWJsZS1vdGhlcicpLFxuICAgICAgICBwbGFjZUJldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdC1idG5cIiksXG4gICAgICAgIGxhc3RQcmVkaWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sYXN0XCIpLFxuICAgICAgICB0b3BGb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wRm9yZWNhc3RcIilcblxuICAgIGxldCBjdXJyZW50VGFiID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fdGFicy1kYXRlLmFjdGl2ZVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hdGNoLW51bWJlclwiKSlcbiAgICBsZXQgY3VycmVudFRhYlRhYmxlID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3RhYnMtZGF0ZS5hY3RpdmVcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXRjaC1udW1iZXJcIikpXG4gICAgbGV0IG1hdGNoTnVtYmVyID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fY29udGFpbmVyLmFjdGl2ZVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hdGNoLW51bWJlclwiKSlcbiAgICBsZXQgc2hvd1RvcEZvcmVjYXN0ID0gdHJ1ZVxuXG4gICAgY29uc3QgRklSU1RfTUFUQ0hfREFURSA9IG5ldyBEYXRlKCcyMDI1LTA0LTI5VDIyOjAwOjAwJykgLy8g0LTQsNGC0LAg0LzQsNGC0YfRg1xuICAgIGNvbnN0IFNFQ09ORF9NQVRDSF9EQVRFID0gbmV3IERhdGUoJzIwMjUtMDQtMzBUMjI6MDA6MDAnKSAvLyDQtNCw0YLQsCDQvNCw0YLRh9GDXG4gICAgY29uc3QgVEhJUkRfTUFUQ0hfREFURSA9IG5ldyBEYXRlKCcyMDI1LTA1LTA2VDIyOjAwOjAwJykgLy8g0LTQsNGC0LAg0LzQsNGC0YfRg1xuICAgIGNvbnN0IEZPVVJUSF9NQVRDSF9EQVRFID0gbmV3IERhdGUoJzIwMjUtMDUtMDdUMjI6MDA6MDAnKSAvLyDQtNCw0YLQsCDQvNCw0YLRh9GDXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXG5cbiAgICBmdW5jdGlvbiBsb2NrTWF0Y2hDb250YWluZXIobWF0Y2hEYXRlLCBtYXRjaE51bWJlcikge1xuICAgICAgICBpZiAobmV3IERhdGUoKSA+IG1hdGNoRGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wcmVkaWN0X19jb250YWluZXJbZGF0YS1tYXRjaC1udW1iZXI9XCIke21hdGNoTnVtYmVyfVwiXWApO1xuICAgICAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByZWRpY3RfX3RhYnMtZGF0ZS5hY3RpdmVbZGF0YS1tYXRjaC1udW1iZXI9XCIke21hdGNoTnVtYmVyfVwiXWApO1xuXG4gICAgICAgICAgICBjb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZih0YWIpe1xuICAgICAgICAgICAgICAgIHBsYWNlQmV0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9ja01hdGNoQ29udGFpbmVyKEZJUlNUX01BVENIX0RBVEUsIDEpOyAvLyDQlNC70Y8g0L/QtdGA0YjQvtCz0L4g0LzQsNGC0YfRg1xuICAgIGxvY2tNYXRjaENvbnRhaW5lcihTRUNPTkRfTUFUQ0hfREFURSwgMik7IC8vINCU0LvRjyDQtNGA0YPQs9C+0LPQviDQvNCw0YLRh9GDXG4gICAgbG9ja01hdGNoQ29udGFpbmVyKFRISVJEX01BVENIX0RBVEUsIDMpOyAvLyDQlNC70Y8g0YLRgNC10YLRjNC+0LPQviDQvNCw0YLRh9GDXG4gICAgbG9ja01hdGNoQ29udGFpbmVyKEZPVVJUSF9NQVRDSF9EQVRFLCA0KTsgLy8g0JTQu9GPINGH0LXRgtCy0LXRgNGC0L7Qs9C+INC80LDRgtGH0YNcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpOyAvLyDQntC90L7QstC40YLQuCDQv9C+0YLQvtGH0L3RgyDQtNCw0YLRg1xuICAgICAgICBsb2NrTWF0Y2hDb250YWluZXIoRklSU1RfTUFUQ0hfREFURSwgMSk7XG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihTRUNPTkRfTUFUQ0hfREFURSwgMik7XG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihUSElSRF9NQVRDSF9EQVRFLCAzKTtcbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKEZPVVJUSF9NQVRDSF9EQVRFLCA0KTtcbiAgICB9LCA2MDAwMDApOyAvLyDQntC90L7QstC70Y7QstCw0YLQuCDQutC+0LbQvdGWIDEwINGF0LJcblxuICAgIGNsYXNzIEJldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHVzZXJJZCwgbWF0Y2hOdW1iZXIsIHRlYW0xR29hbHMgPSAwLCB0ZWFtMkdvYWxzID0gMCwgZmlyc3RHb2FsKSB7XG4gICAgICAgICAgICBpZih1c2VySWQgIT09IG51bGwpIHRoaXMudXNlcmlkID0gdXNlcklkO1xuICAgICAgICAgICAgdGhpcy5tYXRjaE51bWJlciA9IG1hdGNoTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy50ZWFtMSA9IHRlYW0xR29hbHM7XG4gICAgICAgICAgICB0aGlzLnRlYW0yID0gdGVhbTJHb2FscztcbiAgICAgICAgICAgIGlmKGZpcnN0R29hbCAhPT0gdW5kZWZpbmVkKSB0aGlzLmZpcnN0R29hbCA9IGZpcnN0R29hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUdvYWxzKHRlYW0xR29hbHMsIHRlYW0yR29hbHMpIHtcbiAgICAgICAgICAgIGlmICh0ZWFtMUdvYWxzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlYW0xID0gdGVhbTFHb2FscyAhPT0gbnVsbCA/IHRlYW0xR29hbHMgOiB0aGlzLnRlYW0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRlYW0yR29hbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVhbTIgPSB0ZWFtMkdvYWxzICE9PSBudWxsID8gdGVhbTJHb2FscyA6IHRoaXMudGVhbTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdvYWxzVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVGaXJzdEdvYWwoZmlyc3RHb2FsKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3RHb2FsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0R29hbCA9IGZpcnN0R29hbCAhPT0gbnVsbCA/IGZpcnN0R29hbCA6IHRoaXMuZmlyc3RHb2FsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5maXJzdEdvYWxVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhY2hlID0ge307XG4gICAgbGV0IHByZWRpY3REYXRhID0gW107XG5cbiAgICBsZXQgdHJhbnNsYXRlU3RhdGUgPSB0cnVlXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8/IFwicm9cIlxuICAgIC8vIGxldCBsb2NhbGUgPSBcInVrXCJcblxuICAgIGNvbnN0IHJvTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuXG4gICAgbGV0IHVzZXJJZDtcbiAgICAvLyB1c2VySWQgPSAxMDAzMDAyNjg7XG5cbiAgICBsZXQgY3VycmVudEJldDtcblxuICAgIGlmIChyb0xlbmcpIGxvY2FsZSA9ICdybyc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMYXN0QmV0ID0gKGJldHMsIG1hdGNoTnVtYmVyKSA9PntcbiAgICAgICAgaWYoIWJldHMpIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gYmV0cy5maW5kKGJldCA9PiBiZXQubWF0Y2hOdW1iZXIgPT09IG1hdGNoTnVtYmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoQmV0SW5mbyh1c2VySWQpIHtcbiAgICAgICAgY29uc3Qgc2NvcmUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZS0xXCIpXG4gICAgICAgIGNvbnN0IHNjb3JlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUtMlwiKVxuICAgICAgICBjb25zdCBzY29yZTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlLTNcIilcbiAgICAgICAgY29uc3Qgc2NvcmU0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZS00XCIpXG4gICAgICAgIGNvbnN0IGdvYWwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsLTFcIilcbiAgICAgICAgY29uc3QgZ29hbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWwtMlwiKVxuICAgICAgICBjb25zdCBnb2FsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbC0zXCIpXG4gICAgICAgIGNvbnN0IGdvYWw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsLTRcIilcbiAgICAgICAgY29uc3QgbWF0Y2hOdW1iZXIgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X190YWJzLWRhdGUuYWN0aXZlXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0Y2gtbnVtYmVyXCIpKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaE51bWJlcilcblxuICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZihkYXRhLmJldHMpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGJldEF2YWlsYWJsZSA9IGRhdGEuYmV0cy5zb21lKGJldCA9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJldC5tYXRjaE51bWJlciA9PT0gbWF0Y2hOdW1iZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJldEF2YWlsYWJsZSlcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0VGVhbTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3QtdGVhbS50ZWFtMVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0VGVhbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3QtdGVhbS50ZWFtMlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY29yZVRlYW0xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZVRlYW0xXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjb3JlVGVhbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlVGVhbTJcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RHb2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sYXN0LWNvdW50cnlcIik7XG4gICAgICAgICAgICAgICAgaWYoYmV0QXZhaWxhYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFByZWRpY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEJldCA9IGdldExhc3RCZXQoZGF0YS5iZXRzLCBtYXRjaE51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlVGVhbTEudGV4dENvbnRlbnQgPSBsYXN0QmV0LnRlYW0xID09PSB1bmRlZmluZWQgPyBcIi1cIiA6YCR7bGFzdEJldC50ZWFtMX1gO1xuICAgICAgICAgICAgICAgICAgICBzY29yZVRlYW0yLnRleHRDb250ZW50ID0gbGFzdEJldC50ZWFtMiA9PT0gdW5kZWZpbmVkID8gXCItXCIgOmAke2xhc3RCZXQudGVhbTJ9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobGFzdEJldClcblxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJldC5iZXRDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZGljdF9fbGFzdC1yZXN1bHQudW5jb25maXJtZWRcIikuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZWRpY3RfX2xhc3QtcmVzdWx0LmNvbmZpcm1lZFwiKS5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZGljdF9fbGFzdC1yZXN1bHQudW5jb25maXJtZWRcIikuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZWRpY3RfX2xhc3QtcmVzdWx0LmNvbmZpcm1lZFwiKS5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QmV0Lm1hdGNoTnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTEuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJ1a3JhaW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRlYW0yLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwiYmVsZ2l1bVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QmV0Lm1hdGNoTnVtYmVyID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTIuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJ1a3JhaW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRlYW0xLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwiYmVsZ2l1bVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCZXQubWF0Y2hOdW1iZXIgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUZWFtMi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcInVrcmFpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTEuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJiZWxnaXVtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJldC5tYXRjaE51bWJlciA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRlYW0yLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwidWtyYWluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUZWFtMS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcImJlbGdpdW1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHNjb3JlMS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgfHwgc2NvcmUyLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3Qtc2NvcmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGFzdC1nb2FsXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihnb2FsMS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgfHwgZ29hbDIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGFzdC1zY29yZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sYXN0LWdvYWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGxhc3RCZXQuZmlyc3RHb2FsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxhc3RCZXQuZmlyc3RHb2FsID09PSBcInVhXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0R29hbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcInVrcmFpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsYXN0QmV0LmZpcnN0R29hbCA9PT0gXCJiZVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEdvYWwuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJiZWxnaXVtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGFzdEJldC5maXJzdEdvYWwgPT09IFwiZHJhd1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEdvYWwuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJkcmF3XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ29hbDEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpIHx8IGdvYWwyLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sYXN0XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZighYmV0QXZhaWxhYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFByZWRpY3QuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsYXN0UHJlZGljdC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBJbml0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICByZW5kZXJVc2VycygpO1xuICAgICAgICB1cGRhdGVUb3BGb3JlY2FzdHMoY3VycmVudFRhYilcbiAgICAgICAgcmVmcmVzaEJldEluZm8odXNlcklkKVxuICAgIH1cblxuICAgIGxldCBjaGVja1VzZXJBdXRoID0gKCkgPT4ge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICB5b3VBcmVJbkJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIHVuYXV0aE1zZ3MuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHlvdUFyZUluQnRuIG9mIHlvdUFyZUluQnRucykge1xuICAgICAgICAgICAgICAgIHlvdUFyZUluQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYWNlQmV0KGJldCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19jb250YWluZXIuYWN0aXZlXCIpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX3RlYW0taW5jcmVhc2UsIC5wcmVkaWN0X190ZWFtLWRlY3JlYXNlJylcbiAgICAgICAgICAgIC5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgc2NvcmVJbml0KGJ0bik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhY3RpdmVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nb2FsQ29udFwiKVxuICAgICAgICAvLyBjb25zdCBhY3RpdmVJbnB1dCA9IGFjdGl2ZVRhYi5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX3JhZGlvLWl0ZW0gaW5wdXRcIilcblxuXG5cbiAgICAgICAgbGV0IHJlcSA9IHtcbiAgICAgICAgICAgIG1hdGNoTnVtYmVyOiBiZXQubWF0Y2hOdW1iZXIsXG4gICAgICAgICAgICB1c2VyaWQ6IGJldC51c2VyaWQsXG4gICAgICAgIH07XG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVUYWJzKVxuICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiBhY3RpdmVUYWJzKSB7XG4gICAgICAgICAgICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlucHV0ID0gdGFiLnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fcmFkaW8taXRlbS5fYWN0aXZlIGlucHV0XCIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhYilcblxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVJbnB1dClcbiAgICAgICAgICAgICAgICAgICAgcmVxLmZpcnN0R29hbCA9IGFjdGl2ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgaWYgKGJldC5maXJzdEdvYWxVcGRhdGVkKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhiZXQuZmlyc3RHb2FsKVxuICAgICAgICAgICAgcmVxLmZpcnN0R29hbCA9IGJldC5maXJzdEdvYWw7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZXQuZ29hbHNVcGRhdGVkKSB7XG4gICAgICAgICAgICByZXEudGVhbTEgPSBiZXQudGVhbTE7XG4gICAgICAgICAgICByZXEudGVhbTIgPSBiZXQudGVhbTI7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aXZlSW5wdXQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVUYWIpXG5cbiAgICAgICAgcmVxdWVzdCgnL2JldCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQmV0IHBsYWNlZDonLCByZXMpO1xuICAgICAgICAgICAgICAgIEluaXRQYWdlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBsYWNpbmcgYmV0OicsIGVycm9yKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpMThuRGF0YSk7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29hbHMtb3ItemVyb3MnKSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrIVwiKVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIC8vIGN1cnJlbnRCZXQgPSBuZXcgQmV0KHVzZXJJZCwgbWF0Y2hOdW1iZXIpXG4gICAgICAgICAgICBJbml0UGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgSW5pdFBhZ2UoKTtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIHZhciBpID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhd2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEluaXRQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgIH1cbiAgICAgICAgSW5pdFBhZ2UoKVxuXG4gICAgICAgIHBsYWNlQmV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRCZXQpXG4gICAgICAgICAgICBpZihjdXJyZW50QmV0KXtcbiAgICAgICAgICAgICAgICBwbGFjZUJldChjdXJyZW50QmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGN1cnJlbnRCZXQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgY3VycmVudEJldCA9IG5ldyBCZXQodXNlcklkLCBtYXRjaE51bWJlcilcbiAgICAgICAgICAgICAgICBwbGFjZUJldChjdXJyZW50QmV0KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50QmV0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVTY29yZShtYXRjaE51bWJlciwgdGVhbTFHb2FscywgdGVhbTJHb2Fscykge1xuICAgICAgICBpZiAoY3VycmVudEJldCAmJiBjdXJyZW50QmV0Lm1hdGNoTnVtYmVyID09PSBtYXRjaE51bWJlcikge1xuICAgICAgICAgICAgY3VycmVudEJldC51cGRhdGVHb2Fscyh0ZWFtMUdvYWxzLCB0ZWFtMkdvYWxzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRCZXQgPSBuZXcgQmV0KHVzZXJJZCwgbWF0Y2hOdW1iZXIsIHRlYW0xR29hbHMsIHRlYW0yR29hbHMpO1xuICAgICAgICAgICAgY3VycmVudEJldC51cGRhdGVHb2Fscyh0ZWFtMUdvYWxzLCB0ZWFtMkdvYWxzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50QmV0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlRmlyc3RHb2FsKG1hdGNoTnVtYmVyLCBmaXJzdEdvYWwpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRCZXQgJiYgY3VycmVudEJldC5tYXRjaE51bWJlciA9PT0gbWF0Y2hOdW1iZXIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRCZXQudXBkYXRlRmlyc3RHb2FsKGZpcnN0R29hbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50QmV0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlVG9wRm9yZWNhc3RzKG1hdGNoTnVtYmVyKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy8ke21hdGNoTnVtYmVyfWApLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnRvcEZvcmVjYXN0cyk7IC8vINCf0LXRgNC10LLRltGA0LrQsCDQvtGC0YDQuNC80LDQvdC40YUg0LTQsNC90LjRhVxuXG4gICAgICAgICAgICBjb25zdCBmb3JlY2FzdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fZm9yZWNhc3RzJyk7XG4gICAgICAgICAgICBmb3JlY2FzdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cblxuICAgICAgICAgICAgZGF0YS50b3BGb3JlY2FzdHMuZm9yRWFjaChmb3JlY2FzdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9yZWNhc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3ByZWRpY3RfX2ZvcmVjYXN0cy1pdGVtJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gcGFyc2VGbG9hdChmb3JlY2FzdC5wZXJjZW50YWdlKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VTcGFuLnRleHRDb250ZW50ID0gYCR7cGVyY2VudGFnZX0lYDtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9yZWNhc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCAke2ZvcmVjYXN0LmZvcmVjYXN0ID8/IFwiMC0wXCJ9YCk7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3RJdGVtLmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VTcGFuKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZXh0KTtcblxuICAgICAgICAgICAgICAgIGZvcmVjYXN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRvcCBmb3JlY2FzdHM6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCfRgNC10L3QtNC10YAg0L/RgNCw0YbRjtGUJylcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7Y3VycmVudFRhYlRhYmxlfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCB1c2VycyA9IGRhdGEudXNlcnNcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJzKVxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2NvcmVUYWJBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1zY29yZS5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0dvYWxUYWJBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1nb2FsLmFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgaWYodXNlcnMubGVuZ3RoID49IDUwKXtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1RvcEZvcmVjYXN0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih1c2Vycy5sZW5ndGggPCA1MCl7XG4gICAgICAgICAgICAgICAgICAgIHNob3dUb3BGb3JlY2FzdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzU2NvcmVUYWJBY3RpdmUgJiYgc2hvd1RvcEZvcmVjYXN0KSB0b3BGb3JlY2FzdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIGlmIChpc0dvYWxUYWJBY3RpdmUpIHRvcEZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG5cblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1c2VySWQpXG5cbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCwgY3VycmVudFRhYlRhYmxlKVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlcnMpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCBtYXRjaE51bWJlcikge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGlmICghdXNlcnMgfHwgIXVzZXJzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIC8vINCk0ZbQu9GM0YLRgNGD0ZTQvNC+INC60L7RgNC40YHRgtGD0LLQsNGH0ZbQsiwg0Y/QutGWINC30YDQvtCx0LjQu9C4INGB0YLQsNCy0LrRgyDQvdCwINCy0LrQsNC30LDQvdC40Lkg0LzQsNGC0YdcbiAgICAgICAgLy8gY29uc3QgdXNlcnMgPSB1c2Vycy5maWx0ZXIodXNlciA9PlxuICAgICAgICAvLyAgICAgdXNlci5iZXRzLnNvbWUoYmV0ID0+IGJldC5tYXRjaE51bWJlciA9PT0gbWF0Y2hOdW1iZXIpXG4gICAgICAgIC8vICk7XG5cbiAgICAgICAgLy8gaWYgKCF1c2Vycy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAvLyDQl9C90LDRhdC+0LTQuNC80L4g0L/QvtGC0L7Rh9C90L7Qs9C+INC60L7RgNC40YHRgtGD0LLQsNGH0LBcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIC8vINCS0LjQstC+0LTQuNC80L4g0LLRgdGW0YUg0ZbQvdGI0LjRhSDQutC+0YDQuNGB0YLRg9Cy0LDRh9GW0LIg0YMgcmVzdWx0c1RhYmxlXG4gICAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlci51c2VyaWQgIT09IGN1cnJlbnRVc2VySWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCBmYWxzZSwgcmVzdWx0c1RhYmxlLCB1c2VycywgbWF0Y2hOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQktC40LLQvtC00LjQvNC+INC/0L7RgtC+0YfQvdC+0LPQviDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwINCyIHJlc3VsdHNUYWJsZU90aGVyXG4gICAgICAgIGlmIChjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgbWF0Y2hOdW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCBhbGxVc2VycywgbWF0Y2hOdW1iZXIpIHtcbiAgICAgICAgbGV0IG1hdGNoRGF0ZTtcblxuICAgICAgICBpZiAobWF0Y2hOdW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgIG1hdGNoRGF0ZSA9IEZJUlNUX01BVENIX0RBVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoTnVtYmVyID09PSAyKSB7XG4gICAgICAgICAgICBtYXRjaERhdGUgPSBTRUNPTkRfTUFUQ0hfREFURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hOdW1iZXIgPT09IDMpIHtcbiAgICAgICAgICAgIG1hdGNoRGF0ZSA9IFRISVJEX01BVENIX0RBVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoTnVtYmVyID09PSA0KSB7XG4gICAgICAgICAgICBtYXRjaERhdGUgPSBGT1VSVEhfTUFUQ0hfREFURTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkaXRpb25hbFVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7aXNDdXJyZW50VXNlciA/IHVzZXIudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyLnVzZXJpZCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICR7Y3VycmVudERhdGUgPj0gbWF0Y2hEYXRlID9cbiAgICAgICAgICAgIGA8c3Bhbj4ke3VzZXIudGVhbTEgIT09IHVuZGVmaW5lZCAmJiB1c2VyLnRlYW0xICE9PSBudWxsID8gdXNlci50ZWFtMSA6IFwiLVwifTwvc3Bhbj48aW1nIHNyYz1cImh0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ29hbHMtb3ItemVyb2VzL2ltZy92cy5wbmdcIiBhbHQ9XCJ2c1wiPjxzcGFuPiR7dXNlci50ZWFtMiAhPT0gdW5kZWZpbmVkICYmIHVzZXIudGVhbTIgIT09IG51bGwgPyB1c2VyLnRlYW0yIDogXCItXCJ9PC9zcGFuPmAgOlxuICAgICAgICAgICAgYDxzcGFuPioqPC9zcGFuPjxpbWcgc3JjPVwiaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nb2Fscy1vci16ZXJvZXMvaW1nL3ZzLnBuZ1wiIGFsdD1cInZzXCI+PHNwYW4+Kio8L3NwYW4+YFxuICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgJHt1c2VyLndpbm5lciA9PT0gdHJ1ZSAgP1xuICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwicHJpemVcIj4qKioqKjwvZGl2PmAgOlxuICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwibm9XaW5uZXJzXCI+KioqKio8L2Rpdj5gXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICR7dXNlci5ib251c0ZpcnN0R29hbCA9PT0gdHJ1ZSAgP1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIiBkYXRhLXRyYW5zbGF0ZT1cInNzNTAwXCI+KioqKio8L2Rpdj5gIDpcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCJub1dpbm5lcnNcIj4qKioqKjwvZGl2PmBcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQoXCJ5b3VcIik7XG4gICAgICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtpc0N1cnJlbnRVc2VyID8gdXNlci51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXIudXNlcmlkKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4ke3VzZXIudGVhbTEgIT09IHVuZGVmaW5lZCAmJiB1c2VyLnRlYW0xICE9PSBudWxsID8gdXNlci50ZWFtMSA6IFwiLVwifTwvc3Bhbj48aW1nIHNyYz1cImh0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ29hbHMtb3ItemVyb2VzL2ltZy92cy5wbmdcIiBhbHQ9XCJ2c1wiPjxzcGFuPiR7dXNlci50ZWFtMiAhPT0gdW5kZWZpbmVkICYmIHVzZXIudGVhbTIgIT09IG51bGwgPyB1c2VyLnRlYW0yIDogXCItXCJ9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3VzZXIud2lubmVyID09PSB0cnVlICA/XG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIiBkYXRhLXRyYW5zbGF0ZT1cInByaXplXCI+KioqKio8L2Rpdj5gIDpcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwibm9XaW5uZXJzXCI+KioqKio8L2Rpdj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJHt1c2VyLmJvbnVzRmlyc3RHb2FsID09PSB0cnVlICA/XG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCJzczUwMFwiPioqKioqPC9kaXY+YCA6XG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCJub1dpbm5lcnNcIj4qKioqKjwvZGl2PmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgICAgICAgIGNvbnN0IHlvdUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB5b3VCbG9jay5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LXlvdScpO1xuICAgICAgICAgICAgeW91QmxvY2suc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsICd0YWJsZVlvdScpO1xuICAgICAgICAgICAgLy8geW91QmxvY2sudGV4dENvbnRlbnQgPSBcIllvdVwiO1xuICAgICAgICAgICAgYWRkaXRpb25hbFVzZXJSb3cuaW5zZXJ0QmVmb3JlKHlvdUJsb2NrLCBhZGRpdGlvbmFsVXNlclJvdy5jaGlsZHJlblsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0YWJsZS5hcHBlbmQoYWRkaXRpb25hbFVzZXJSb3cpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgLy8gM0QgYW5pbVxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZWFtLCAuYW5pbUNhcmQsIC5hbmltUmlnaHRcIik7IC8vINCU0L7QsdCw0LLQu9GP0LXQvCAuYW5pbVJpZ2h0XG4gICAgbGV0IGFuZ2xlID0gMDtcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVDYXJkcygpIHtcbiAgICAgICAgYW5nbGUgKz0gMC45OyAvLyBzcGVlZFxuICAgICAgICBjb25zdCByb3RhdGVYID0gTWF0aC5zaW4oYW5nbGUgKiAoTWF0aC5QSSAvIDE4MCkpICogMTA7IC8vINCa0L7Qu9C10LHQsNC90LjQtSDQv9C+IFhcbiAgICAgICAgY29uc3Qgcm90YXRlWSA9IE1hdGguY29zKGFuZ2xlICogKE1hdGguUEkgLyAxODApKSAqIDEwOyAvLyDQmtC+0LvQtdCx0LDQvdC40LUg0L/QviBZXG5cbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucyhcImFuaW1SaWdodFwiKSkge1xuICAgICAgICAgICAgICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHstcm90YXRlWX1kZWcpIHJvdGF0ZVgoJHstcm90YXRlWH1kZWcpYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgke3JvdGF0ZVl9ZGVnKSByb3RhdGVYKCR7cm90YXRlWH1kZWcpYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVDYXJkcyk7XG4gICAgfVxuICAgIGFuaW1hdGVDYXJkcygpO1xuXG4gICAgLy8gcHJlZGljdCB0YWJzXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X190YWJzLWdsb2JhbCA+IGRpdiwgLnByZWRpY3RfX3RhYnMtZGF0ZXMgPiBkaXYnKTtcbiAgICBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX2NvbnRhaW5lcicpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlVGFiQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgbGV0IG1hdGNoRGF0ZTtcblxuICAgICAgICBjb25zdCBjbGlja2VkVGFiID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucHJlZGljdF9fdGFicy1kYXRlXCIpIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnByZWRpY3RfX3RhYnMtZ29hbFwiKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdChcIi5wcmVkaWN0X190YWJzLXNjb3JlXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjbGlja2VkVGFiKVxuICAgICAgICBjb25zdCB0YWJQYWlyID0gY2xpY2tlZFRhYi5jbG9zZXN0KCcucHJlZGljdF9fdGFicy1nbG9iYWwnKSB8fCBjbGlja2VkVGFiLmNsb3Nlc3QoJy5wcmVkaWN0X190YWJzLWRhdGVzJyk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRNYXRjaCA9IE51bWJlcihjbGlja2VkVGFiLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0Y2gtbnVtYmVyXCIpKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNsaWNrZWRUYWIpXG5cbiAgICAgICAgaWYoY3VycmVudE1hdGNoID09PSAxKXtcbiAgICAgICAgICAgIG1hdGNoRGF0ZSA9IEZJUlNUX01BVENIX0RBVEVcbiAgICAgICAgfVxuICAgICAgICBpZihjdXJyZW50TWF0Y2ggPT09IDIpe1xuICAgICAgICAgICAgbWF0Y2hEYXRlID0gU0VDT05EX01BVENIX0RBVEVcbiAgICAgICAgfVxuICAgICAgICBpZihjdXJyZW50TWF0Y2ggPT09IDMpe1xuICAgICAgICAgICAgbWF0Y2hEYXRlID0gVEhJUkRfTUFUQ0hfREFURVxuICAgICAgICB9XG4gICAgICAgIGlmKGN1cnJlbnRNYXRjaCA9PT0gNCl7XG4gICAgICAgICAgICBtYXRjaERhdGUgPSBGT1VSVEhfTUFUQ0hfREFURVxuICAgICAgICB9XG4gICAgICAgIGlmKGN1cnJlbnREYXRlID4gbWF0Y2hEYXRlKXtcbiAgICAgICAgICAgIHBsYWNlQmV0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHBsYWNlQmV0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoY2xpY2tlZFRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIGlmICh0YWJQYWlyKSB7XG4gICAgICAgICAgICBjb25zdCBwYWlyID0gdGFiUGFpci5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAocGFpci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFpclswXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWNrZWRUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHVwZGF0ZUNvbnRhaW5lcnMoKTtcbiAgICAgICAgLy8gcmVmcmVzaEJldEluZm8odXNlcklkKVxuICAgICAgICBpZihjbGlja2VkVGFiLmNsb3Nlc3QoJy5wcmVkaWN0X190YWJzLWRhdGVzJykpe1xuICAgICAgICAgICAgdXBkYXRlVG9wRm9yZWNhc3RzKGN1cnJlbnRNYXRjaClcbiAgICAgICAgICAgIGN1cnJlbnRCZXQgPSBuZXcgQmV0KHVzZXJJZCwgY3VycmVudE1hdGNoKVxuICAgICAgICAgICAgbWF0Y2hOdW1iZXIgPSBOdW1iZXIoY2xpY2tlZFRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hdGNoLW51bWJlclwiKSlcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZGljdF9fdGVhbS1udW1iZXJcIikuZm9yRWFjaCgoc2NvcmUsIGkpID0+e1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoRGF0ZSwgbWF0Y2hOdW1iZXIpXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudERhdGUgPiBtYXRjaERhdGUgJiYgaSA9PT0gMSAmJiBtYXRjaE51bWJlciA9PT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlLnRleHRDb250ZW50ID0gXCIwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihjdXJyZW50RGF0ZSA+IG1hdGNoRGF0ZSAmJiBpID09PSAwICYmIG1hdGNoTnVtYmVyID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUudGV4dENvbnRlbnQgPSBcIjBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBlbHNle1xuICAgICAgICAgICAgICAgIC8vICAgICBzY29yZS50ZXh0Q29udGVudCA9IFwiMFwiXG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKEZJUlNUX01BVENIX0RBVEUsIDEpOyAvLyDQlNC70Y8g0L/QtdGA0YjQvtCz0L4g0LzQsNGC0YfRg1xuICAgICAgICBsb2NrTWF0Y2hDb250YWluZXIoU0VDT05EX01BVENIX0RBVEUsIDIpOyAvLyDQlNC70Y8g0LTRgNGD0LPQvtCz0L4g0LzQsNGC0YfRg1xuICAgICAgICBsb2NrTWF0Y2hDb250YWluZXIoVEhJUkRfTUFUQ0hfREFURSwgMyk7IC8vINCU0LvRjyDRgtGA0LXRgtGM0L7Qs9C+INC80LDRgtGH0YNcbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKEZPVVJUSF9NQVRDSF9EQVRFLCA0KTsgLy8g0JTQu9GPINGH0LXRgtCy0LXRgNGC0L7Qs9C+INC80LDRgtGH0YNcbiAgICB9XG5cbiAgICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRhYkNsaWNrKSk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb250YWluZXJzKCkge1xuICAgICAgICBjb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG5cbiAgICAgICAgY29uc3QgaXNTY29yZVRhYkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLXNjb3JlLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBpc0dvYWxUYWJBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1nb2FsLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBpc0RhdGUxQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3RhYnMtZGF0ZS5kYXRlMS5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgaXNEYXRlMkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLWRhdGUuZGF0ZTIuYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGlzRGF0ZTNBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1kYXRlLmRhdGUzLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBpc0RhdGU0QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3RhYnMtZGF0ZS5kYXRlNC5hY3RpdmUnKTtcblxuXG4gICAgICAgIGlmICghIWlzU2NvcmVUYWJBY3RpdmUpIHtcbiAgICAgICAgICAgIGlmKHNob3dUb3BGb3JlY2FzdCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NvcmVcIilcbiAgICAgICAgICAgICAgICB0b3BGb3JlY2FzdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNEYXRlMUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250YWluZXIuc2NvcmUtMScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0RhdGUyQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRhaW5lci5zY29yZS0yJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZTNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGFpbmVyLnNjb3JlLTMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlNEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250YWluZXIuc2NvcmUtNCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEhaXNHb2FsVGFiQWN0aXZlKSB7XG4gICAgICAgICAgICBpZihzaG93VG9wRm9yZWNhc3QpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjb3JlXCIpXG4gICAgICAgICAgICAgICAgdG9wRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0RhdGUxQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRhaW5lci5nb2FsLTEnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlMkFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250YWluZXIuZ29hbC0yJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZTNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGFpbmVyLmdvYWwtMycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0RhdGU0QWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRhaW5lci5nb2FsLTQnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vc2NvcmVcblxuICAgIGZ1bmN0aW9uIHNjb3JlSW5pdChidG4pe1xuICAgICAgICBjb25zdCB0ZWFtQ29udHJvbCA9IGJ0bi5jbG9zZXN0KCcucHJlZGljdF9fdGVhbS1jb250cm9sJyk7XG4gICAgICAgIGNvbnN0IHRlYW1OdW1iZXIgPSB0ZWFtQ29udHJvbC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGVhbS1udW1iZXInKVxuICAgICAgICBjb25zdCBtYXRjaENvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcucHJlZGljdF9fY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IG1hdGNoTnVtYmVyID0gcGFyc2VJbnQobWF0Y2hDb250YWluZXIuZGF0YXNldC5tYXRjaE51bWJlcik7XG5cbiAgICAgICAgY29uc3QgZ2V0R29hbHMgPSAodGVhbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IG1hdGNoQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRlYW09XCIke3RlYW19XCJdIC5wcmVkaWN0X190ZWFtLW51bWJlcmApO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBOdW1iZXIoZWxlbWVudC50ZXh0Q29udGVudCkgfHwgMCA6IDA7XG4gICAgICAgIH07XG5cblxuICAgICAgICBjb25zdCB0ZWFtMUdvYWxzID0gZ2V0R29hbHMoJ3RlYW0xJykgO1xuICAgICAgICBjb25zdCB0ZWFtMkdvYWxzID0gZ2V0R29hbHMoJ3RlYW0yJyk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGVhbTFHb2FscywgdGVhbTJHb2FscylcblxuICAgICAgICB1cGRhdGVTY29yZShtYXRjaE51bWJlciwgdGVhbTFHb2FscywgdGVhbTJHb2Fscyk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX3RlYW0taW5jcmVhc2UsIC5wcmVkaWN0X190ZWFtLWRlY3JlYXNlJykuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgY29uc3QgdGVhbUNvbnRyb2wgPSBidG4uY2xvc2VzdCgnLnByZWRpY3RfX3RlYW0tY29udHJvbCcpO1xuICAgICAgICAgICAgY29uc3QgdGVhbU51bWJlciA9IHRlYW1Db250cm9sLnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190ZWFtLW51bWJlcicpXG4gICAgICAgICAgICBjb25zdCBtYXRjaENvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcucHJlZGljdF9fY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KHRlYW1OdW1iZXIudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3ByZWRpY3RfX3RlYW0taW5jcmVhc2UnKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZWFtTnVtYmVyLnRleHRDb250ZW50ID0gYCR7dmFsdWV9YDtcbiAgICAgICAgICAgIHNjb3JlSW5pdChidG4pXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhiZXQpXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAvL3RhYmxlIHRhYnNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RhYnMtZGF0ZScpLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190YWJzLWRhdGUnKS5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGN1cnJlbnRUYWJUYWJsZSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX190YWJzLWRhdGUuYWN0aXZlXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0Y2gtbnVtYmVyXCIpKVxuICAgICAgICAgICAgcmVuZGVyVXNlcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG5cbiAgICAvL3BvcHVwc1xuXG4gICAgZnVuY3Rpb24gc2V0UG9wdXBzKHRyaWdnZXJCdXR0b25zLCBwb3B1cENsYXNzKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKTtcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBzX19pdGVtLiR7cG9wdXBDbGFzc31gKTtcbiAgICAgICAgY29uc3QgcG9wdXBCdG4gPSBwb3B1cHNDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wb3B1cHNfX2l0ZW0tYnRuXCIpXG5cblxuICAgICAgICBpZiAoIXRyaWdnZXJCdXR0b25zIHx8ICFwb3B1cCB8fCAhcG9wdXBzQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAgICAgdHJpZ2dlckJ1dHRvbnMuZm9yRWFjaCh0cmlnZ2VyQnV0dG9uID0+IHtcbiAgICAgICAgICAgIHRyaWdnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGFjaXR5Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQocG9wdXBDbGFzcyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwc19faXRlbS1jbG9zZScpO1xuICAgICAgICBjb25zdCBidG5DbG9zZSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xvc2UnKTtcblxuICAgICAgICBwb3B1cHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwc0NvbnRhaW5lciB8fCBlLnRhcmdldCA9PT0gY2xvc2VCdXR0b24gfHwgZS50YXJnZXQgPT09IGJ0bkNsb3NlKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBjbG9zZVBvcHVwKCkge1xuICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ19vcGFjaXR5Jyk7XG4gICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShwb3B1cENsYXNzKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwb3B1cEJ0bilcbiAgICAgICAgcG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PntcbiAgICAgICAgICAgIGNsb3NlUG9wdXAoKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgc2V0UG9wdXBzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5naWRlX19saXN0LWJ0bicpLCAnZ2lkZVBvcHVwJyk7XG4gICAgc2V0UG9wdXBzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X19idG4udG9vay1wYXJ0JyksICdfY29uZmlybVBvcHVwJyk7XG5cbiAgICAvL2dvIHRvIHByZWRpY3RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvUHJlZGljdFwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlZGljdFwiKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIDI7XG5cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmFkaW9Db250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX3JhZGlvJyk7XG5cbiAgICByYWRpb0NvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXIgPT4ge1xuICAgICAgICBjb25zdCByYWRpb0lucHV0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fcmFkaW8taXRlbScpO1xuXG4gICAgICAgIHJhZGlvSW5wdXRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByYWRpb0lucHV0cy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlKVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlRmlyc3RHb2FsKG1hdGNoTnVtYmVyLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KVxuXG4gICAgLy8gVEVTVFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiMTg5MDg0NjVcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbGFzdFByZWQnKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX2xhc3QnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2V0UG9wdXBzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tdGhlbmtzJyksICdfY29uZmlybVBvcHVwJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXByZWRpY3QnKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmNvbmZpcm1lZCcpLmZvckVhY2godW5jb25maXJtZWQgPT4ge1xuICAgICAgICAgICAgICAgIHVuY29uZmlybWVkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb25maXJtZWQnKS5mb3JFYWNoKGNvbmZpcm1lZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uZmlybWVkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWFmdGVyXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBGSVJTVF9NQVRDSF9EQVRFID0gbmV3IERhdGUoJzIwMjItMDMtMjBUMjE6MTU6MDAnKVxuICAgICAgICBsb2NrTWF0Y2hDb250YWluZXIoRklSU1RfTUFUQ0hfREFURSwgMSk7XG4gICAgICAgIHBsYWNlQmV0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhcImxvY2sgdGFibGVcIilcbiAgICB9KTtcblxuICAgIHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikgPz8gbnVsbFxuXG4gICAgdXBkYXRlVG9wRm9yZWNhc3RzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlVG9wRm9yZWNhc3RzINCy0LjQvNC60L3QtdC90L4g0LTQu9GPINGC0LXRgdGC0YMnKTtcbiAgICB9XG5cblxuXG4gICAgcG9wdWxhdGVVc2Vyc1RhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncG9wdWxhdGVVc2Vyc1RhYmxlINCy0LjQvNC60L3QtdC90L4g0LTQu9GPINGC0LXRgdGC0YMnKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5VXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Rpc3BsYXlVc2VyINCy0LjQvNC60L3QtdC90L4g0LTQu9GPINGC0LXRgdGC0YMnKTtcbiAgICB9XG5cbiAgICByZW5kZXJVc2VycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbmRlclVzZXJzINCy0LjQvNC60L3QtdC90L4g0LTQu9GPINGC0LXRgdGC0YMnKTtcbiAgICAgICAgLy8gc2hvd1RvcEZvcmVjYXN0ID0gdHJ1ZVxuICAgIH1cblxuXG5cblxuXG59KSgpXG4iXX0=
