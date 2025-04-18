"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (_sessionStorage$getIt, _document$querySelect3, _sessionStorage$getIt2) {
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
    return _createClass(Bet, [{
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
  document.querySelectorAll('.btn-lastPred-1').forEach(function (button) {
    button.addEventListener('click', function () {
      document.querySelectorAll('.predict__last-1').forEach(function (element) {
        element.classList.toggle('hide');
      });
      document.querySelector('.predict__last-TEST').add("hide");
    });
  });
  document.querySelectorAll('.btn-lastPred-2').forEach(function (button) {
    button.addEventListener('click', function () {
      document.querySelectorAll('.predict__last-TEST').forEach(function (element) {
        element.classList.toggle('hide');
      });
      document.querySelector('.predict__last-1').add("hide");
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
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 || _document$querySelect2.classList.toggle("hide");
    });
  });
  (_document$querySelect3 = document.querySelector(".btn-after")) === null || _document$querySelect3 === void 0 || _document$querySelect3.addEventListener("click", function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiX3Nlc3Npb25TdG9yYWdlJGdldEl0IiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsIl9zZXNzaW9uU3RvcmFnZSRnZXRJdDIiLCJhcGlVUkwiLCJ1bmF1dGhNc2dzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwieW91QXJlSW5CdG5zIiwibWFpblBhZ2UiLCJxdWVyeVNlbGVjdG9yIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJwbGFjZUJldEJ0biIsImxhc3RQcmVkaWN0IiwidG9wRm9yZWNhc3QiLCJjdXJyZW50VGFiIiwiTnVtYmVyIiwiZ2V0QXR0cmlidXRlIiwiY3VycmVudFRhYlRhYmxlIiwibWF0Y2hOdW1iZXIiLCJzaG93VG9wRm9yZWNhc3QiLCJGSVJTVF9NQVRDSF9EQVRFIiwiRGF0ZSIsIlNFQ09ORF9NQVRDSF9EQVRFIiwiVEhJUkRfTUFUQ0hfREFURSIsIkZPVVJUSF9NQVRDSF9EQVRFIiwiY3VycmVudERhdGUiLCJsb2NrTWF0Y2hDb250YWluZXIiLCJtYXRjaERhdGUiLCJjb250YWluZXJzIiwiY29uY2F0IiwidGFiIiwiZm9yRWFjaCIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsInNldEludGVydmFsIiwiQmV0IiwidXNlcklkIiwidGVhbTFHb2FscyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInRlYW0yR29hbHMiLCJmaXJzdEdvYWwiLCJfY2xhc3NDYWxsQ2hlY2siLCJ1c2VyaWQiLCJ0ZWFtMSIsInRlYW0yIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJ1cGRhdGVHb2FscyIsImdvYWxzVXBkYXRlZCIsInVwZGF0ZUZpcnN0R29hbCIsImZpcnN0R29hbFVwZGF0ZWQiLCJjYWNoZSIsInByZWRpY3REYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJkZWJ1ZyIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInJvTGVuZyIsImVuTGVuZyIsImkxOG5EYXRhIiwiY3VycmVudEJldCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJfb2JqZWN0U3ByZWFkIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0TGFzdEJldCIsImJldHMiLCJmaW5kIiwiYmV0IiwicmVmcmVzaEJldEluZm8iLCJzY29yZTEiLCJzY29yZTIiLCJzY29yZTMiLCJzY29yZTQiLCJnb2FsMSIsImdvYWwyIiwiZ29hbDMiLCJnb2FsNCIsIm1ldGhvZCIsImRhdGEiLCJiZXRBdmFpbGFibGUiLCJzb21lIiwibGFzdFRlYW0xIiwibGFzdFRlYW0yIiwic2NvcmVUZWFtMSIsInNjb3JlVGVhbTIiLCJyZW1vdmUiLCJsYXN0QmV0IiwidGV4dENvbnRlbnQiLCJiZXRDb25maXJtZWQiLCJpdGVtIiwic2V0QXR0cmlidXRlIiwidHJhbnNsYXRlIiwiY29udGFpbnMiLCJlcnJvciIsImNvbnNvbGUiLCJJbml0UGFnZSIsImNoZWNrVXNlckF1dGgiLCJyZW5kZXJVc2VycyIsInVwZGF0ZVRvcEZvcmVjYXN0cyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJ5b3VBcmVJbkJ0biIsImVyciIsImUiLCJmIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInVuYXV0aE1lcyIsInBsYWNlQmV0IiwiYnRuIiwic2NvcmVJbml0IiwiYWN0aXZlVGFicyIsInJlcSIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJhY3RpdmVJbnB1dCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZFRyYW5zbGF0aW9ucyIsImxvZyIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImVsZW1zIiwiZWxlbSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJfaSIsIl9hcnIiLCJsYW5nIiwiaW5pdCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImMiLCJpIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVNjb3JlIiwiZm9yZWNhc3RzQ29udGFpbmVyIiwidG9wRm9yZWNhc3RzIiwiZm9yZWNhc3QiLCJfZm9yZWNhc3QkZm9yZWNhc3QiLCJmb3JlY2FzdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwicGVyY2VudGFnZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwicGVyY2VudGFnZVNwYW4iLCJmb3JlY2FzdFRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwidXNlcnMiLCJpc1Njb3JlVGFiQWN0aXZlIiwiaXNHb2FsVGFiQWN0aXZlIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsImN1cnJlbnRVc2VyIiwidXNlciIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwiYWxsVXNlcnMiLCJhZGRpdGlvbmFsVXNlclJvdyIsIm1hc2tVc2VySWQiLCJ3aW5uZXIiLCJib251c0ZpcnN0R29hbCIsInlvdUJsb2NrIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJhcHBlbmQiLCJ0b1N0cmluZyIsInNsaWNlIiwiY2FyZHMiLCJhbmdsZSIsImFuaW1hdGVDYXJkcyIsInJvdGF0ZVgiLCJNYXRoIiwic2luIiwiUEkiLCJyb3RhdGVZIiwiY29zIiwiY2FyZCIsInN0eWxlIiwidHJhbnNmb3JtIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGFicyIsImhhbmRsZVRhYkNsaWNrIiwiZXZlbnQiLCJjbGlja2VkVGFiIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRhYlBhaXIiLCJjdXJyZW50TWF0Y2giLCJwYWlyIiwidXBkYXRlQ29udGFpbmVycyIsInNjb3JlIiwiYnV0dG9uIiwiY2hlY2tlZCIsImlzRGF0ZTFBY3RpdmUiLCJpc0RhdGUyQWN0aXZlIiwiaXNEYXRlM0FjdGl2ZSIsImlzRGF0ZTRBY3RpdmUiLCJ0ZWFtQ29udHJvbCIsInRlYW1OdW1iZXIiLCJtYXRjaENvbnRhaW5lciIsInBhcnNlSW50IiwiZGF0YXNldCIsImdldEdvYWxzIiwidGVhbSIsInNldFBvcHVwcyIsInRyaWdnZXJCdXR0b25zIiwicG9wdXBDbGFzcyIsInBvcHVwc0NvbnRhaW5lciIsInBvcHVwIiwicG9wdXBCdG4iLCJ0cmlnZ2VyQnV0dG9uIiwib3ZlcmZsb3ciLCJjbG9zZUJ1dHRvbiIsImJ0bkNsb3NlIiwiY2xvc2VQb3B1cCIsInRhcmdldEVsZW1lbnQiLCJ0YXJnZXRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInJhZGlvQ29udGFpbmVycyIsInJhZGlvSW5wdXRzIiwicmFkaW8iLCJ0b2dnbGUiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiYXV0aEJ0biIsInVuY29uZmlybWVkIiwiY29uZmlybWVkIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFVBQUFBLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLHNCQUFBLEVBQVk7RUFDVCxJQUFNQyxNQUFNLEdBQUcsZ0RBQWdEO0lBQzNEQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0lBQ3RERSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM5Q0Ms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QSxlQUFwQ0Esc0JBQUEsQ0FBc0NvSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNsRSxJQUFNaEosZ0JBQWdCLEdBQUcsSUFBSUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3hESyxrQkFBa0IsQ0FBQ04sZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDVCxXQUFXLENBQUNzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDbEN1RSxPQUFPLENBQUM4QixHQUFHLENBQUMsWUFBWSxDQUFDO0VBQzdCLENBQUMsQ0FBQztFQUVGbEcsTUFBTSxJQUFBcEMsc0JBQUEsR0FBRzJELGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFBNUQsc0JBQUEsY0FBQUEsc0JBQUEsR0FBSSxJQUFJO0VBRWpENEcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFlO0lBQzdCSixPQUFPLENBQUM4QixHQUFHLENBQUMsdUNBQXVDLENBQUM7RUFDeEQsQ0FBQztFQUlEZ0Qsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFlO0lBQzdCOUUsT0FBTyxDQUFDOEIsR0FBRyxDQUFDLHVDQUF1QyxDQUFDO0VBQ3hELENBQUM7RUFFRG9ELFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQWU7SUFDdEJsRixPQUFPLENBQUM4QixHQUFHLENBQUMsZ0NBQWdDLENBQUM7RUFDakQsQ0FBQztFQUVEM0IsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBZTtJQUN0QkgsT0FBTyxDQUFDOEIsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO0lBQzdDO0VBQ0osQ0FBQztBQU1MLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfcHJlZGljdG9yX2Zvb3RiYWxsX3JvJyxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHlvdUFyZUluQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29rLXBhcnQnKSxcbiAgICAgICAgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cy10YWJsZScpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzLXRhYmxlLW90aGVyJyksXG4gICAgICAgIHBsYWNlQmV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0LWJ0blwiKSxcbiAgICAgICAgbGFzdFByZWRpY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3RcIiksXG4gICAgICAgIHRvcEZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BGb3JlY2FzdFwiKVxuXG4gICAgbGV0IGN1cnJlbnRUYWIgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X190YWJzLWRhdGUuYWN0aXZlXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0Y2gtbnVtYmVyXCIpKVxuICAgIGxldCBjdXJyZW50VGFiVGFibGUgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fdGFicy1kYXRlLmFjdGl2ZVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hdGNoLW51bWJlclwiKSlcbiAgICBsZXQgbWF0Y2hOdW1iZXIgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19jb250YWluZXIuYWN0aXZlXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0Y2gtbnVtYmVyXCIpKVxuICAgIGxldCBzaG93VG9wRm9yZWNhc3QgPSB0cnVlXG5cbiAgICBjb25zdCBGSVJTVF9NQVRDSF9EQVRFID0gbmV3IERhdGUoJzIwMjUtMDQtMjlUMjI6MDA6MDAnKSAvLyDQtNCw0YLQsCDQvNCw0YLRh9GDXG4gICAgY29uc3QgU0VDT05EX01BVENIX0RBVEUgPSBuZXcgRGF0ZSgnMjAyNS0wNC0zMFQyMjowMDowMCcpIC8vINC00LDRgtCwINC80LDRgtGH0YNcbiAgICBjb25zdCBUSElSRF9NQVRDSF9EQVRFID0gbmV3IERhdGUoJzIwMjUtMDUtMDZUMjI6MDA6MDAnKSAvLyDQtNCw0YLQsCDQvNCw0YLRh9GDXG4gICAgY29uc3QgRk9VUlRIX01BVENIX0RBVEUgPSBuZXcgRGF0ZSgnMjAyNS0wNS0wN1QyMjowMDowMCcpIC8vINC00LDRgtCwINC80LDRgtGH0YNcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcblxuICAgIGZ1bmN0aW9uIGxvY2tNYXRjaENvbnRhaW5lcihtYXRjaERhdGUsIG1hdGNoTnVtYmVyKSB7XG4gICAgICAgIGlmIChuZXcgRGF0ZSgpID4gbWF0Y2hEYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnByZWRpY3RfX2NvbnRhaW5lcltkYXRhLW1hdGNoLW51bWJlcj1cIiR7bWF0Y2hOdW1iZXJ9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJlZGljdF9fdGFicy1kYXRlLmFjdGl2ZVtkYXRhLW1hdGNoLW51bWJlcj1cIiR7bWF0Y2hOdW1iZXJ9XCJdYCk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKHRhYil7XG4gICAgICAgICAgICAgICAgcGxhY2VCZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NrTWF0Y2hDb250YWluZXIoRklSU1RfTUFUQ0hfREFURSwgMSk7IC8vINCU0LvRjyDQv9C10YDRiNC+0LPQviDQvNCw0YLRh9GDXG4gICAgbG9ja01hdGNoQ29udGFpbmVyKFNFQ09ORF9NQVRDSF9EQVRFLCAyKTsgLy8g0JTQu9GPINC00YDRg9Cz0L7Qs9C+INC80LDRgtGH0YNcbiAgICBsb2NrTWF0Y2hDb250YWluZXIoVEhJUkRfTUFUQ0hfREFURSwgMyk7IC8vINCU0LvRjyDRgtGA0LXRgtGM0L7Qs9C+INC80LDRgtGH0YNcbiAgICBsb2NrTWF0Y2hDb250YWluZXIoRk9VUlRIX01BVENIX0RBVEUsIDQpOyAvLyDQlNC70Y8g0YfQtdGC0LLQtdGA0YLQvtCz0L4g0LzQsNGC0YfRg1xuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7IC8vINCe0L3QvtCy0LjRgtC4INC/0L7RgtC+0YfQvdGDINC00LDRgtGDXG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihGSVJTVF9NQVRDSF9EQVRFLCAxKTtcbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKFNFQ09ORF9NQVRDSF9EQVRFLCAyKTtcbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKFRISVJEX01BVENIX0RBVEUsIDMpO1xuICAgICAgICBsb2NrTWF0Y2hDb250YWluZXIoRk9VUlRIX01BVENIX0RBVEUsIDQpO1xuICAgIH0sIDYwMDAwMCk7IC8vINCe0L3QvtCy0LvRjtCy0LDRgtC4INC60L7QttC90ZYgMTAg0YXQslxuXG4gICAgY2xhc3MgQmV0IHtcbiAgICAgICAgY29uc3RydWN0b3IodXNlcklkLCBtYXRjaE51bWJlciwgdGVhbTFHb2FscyA9IDAsIHRlYW0yR29hbHMgPSAwLCBmaXJzdEdvYWwpIHtcbiAgICAgICAgICAgIGlmKHVzZXJJZCAhPT0gbnVsbCkgdGhpcy51c2VyaWQgPSB1c2VySWQ7XG4gICAgICAgICAgICB0aGlzLm1hdGNoTnVtYmVyID0gbWF0Y2hOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLnRlYW0xID0gdGVhbTFHb2FscztcbiAgICAgICAgICAgIHRoaXMudGVhbTIgPSB0ZWFtMkdvYWxzO1xuICAgICAgICAgICAgaWYoZmlyc3RHb2FsICE9PSB1bmRlZmluZWQpIHRoaXMuZmlyc3RHb2FsID0gZmlyc3RHb2FsO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlR29hbHModGVhbTFHb2FscywgdGVhbTJHb2Fscykge1xuICAgICAgICAgICAgaWYgKHRlYW0xR29hbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVhbTEgPSB0ZWFtMUdvYWxzICE9PSBudWxsID8gdGVhbTFHb2FscyA6IHRoaXMudGVhbTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGVhbTJHb2FscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWFtMiA9IHRlYW0yR29hbHMgIT09IG51bGwgPyB0ZWFtMkdvYWxzIDogdGhpcy50ZWFtMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ29hbHNVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUZpcnN0R29hbChmaXJzdEdvYWwpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdEdvYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RHb2FsID0gZmlyc3RHb2FsICE9PSBudWxsID8gZmlyc3RHb2FsIDogdGhpcy5maXJzdEdvYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZpcnN0R29hbFVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FjaGUgPSB7fTtcbiAgICBsZXQgcHJlZGljdERhdGEgPSBbXTtcblxuICAgIGxldCB0cmFuc2xhdGVTdGF0ZSA9IHRydWVcbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPz8gXCJyb1wiXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwidWtcIlxuXG4gICAgY29uc3Qgcm9MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG5cbiAgICBsZXQgdXNlcklkO1xuICAgIC8vIHVzZXJJZCA9IDEwMDMwMDI2ODtcblxuICAgIGxldCBjdXJyZW50QmV0O1xuXG4gICAgaWYgKHJvTGVuZykgbG9jYWxlID0gJ3JvJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGNvbnN0IGdldExhc3RCZXQgPSAoYmV0cywgbWF0Y2hOdW1iZXIpID0+e1xuICAgICAgICBpZighYmV0cykgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiBiZXRzLmZpbmQoYmV0ID0+IGJldC5tYXRjaE51bWJlciA9PT0gbWF0Y2hOdW1iZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hCZXRJbmZvKHVzZXJJZCkge1xuICAgICAgICBjb25zdCBzY29yZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlLTFcIilcbiAgICAgICAgY29uc3Qgc2NvcmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZS0yXCIpXG4gICAgICAgIGNvbnN0IHNjb3JlMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUtM1wiKVxuICAgICAgICBjb25zdCBzY29yZTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlLTRcIilcbiAgICAgICAgY29uc3QgZ29hbDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWwtMVwiKVxuICAgICAgICBjb25zdCBnb2FsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbC0yXCIpXG4gICAgICAgIGNvbnN0IGdvYWwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsLTNcIilcbiAgICAgICAgY29uc3QgZ29hbDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWwtNFwiKVxuICAgICAgICBjb25zdCBtYXRjaE51bWJlciA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX3RhYnMtZGF0ZS5hY3RpdmVcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXRjaC1udW1iZXJcIikpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoTnVtYmVyKVxuXG4gICAgICAgIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmKGRhdGEuYmV0cyl7XG4gICAgICAgICAgICAgICAgY29uc3QgYmV0QXZhaWxhYmxlID0gZGF0YS5iZXRzLnNvbWUoYmV0ID0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmV0Lm1hdGNoTnVtYmVyID09PSBtYXRjaE51bWJlclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYmV0QXZhaWxhYmxlKVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RUZWFtMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGFzdC10ZWFtLnRlYW0xXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RUZWFtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGFzdC10ZWFtLnRlYW0yXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjb3JlVGVhbTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlVGVhbTFcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcmVUZWFtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmVUZWFtMlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdEdvYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3QtY291bnRyeVwiKTtcbiAgICAgICAgICAgICAgICBpZihiZXRBdmFpbGFibGUpe1xuICAgICAgICAgICAgICAgICAgICBsYXN0UHJlZGljdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0QmV0ID0gZ2V0TGFzdEJldChkYXRhLmJldHMsIG1hdGNoTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVUZWFtMS50ZXh0Q29udGVudCA9IGxhc3RCZXQudGVhbTEgPT09IHVuZGVmaW5lZCA/IFwiLVwiIDpgJHtsYXN0QmV0LnRlYW0xfWA7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlVGVhbTIudGV4dENvbnRlbnQgPSBsYXN0QmV0LnRlYW0yID09PSB1bmRlZmluZWQgPyBcIi1cIiA6YCR7bGFzdEJldC50ZWFtMn1gO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsYXN0QmV0KVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QmV0LmJldENvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmVkaWN0X19sYXN0LXJlc3VsdC51bmNvbmZpcm1lZFwiKS5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZGljdF9fbGFzdC1yZXN1bHQuY29uZmlybWVkXCIpLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmVkaWN0X19sYXN0LXJlc3VsdC51bmNvbmZpcm1lZFwiKS5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZGljdF9fbGFzdC1yZXN1bHQuY29uZmlybWVkXCIpLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCZXQubWF0Y2hOdW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUZWFtMS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcInVrcmFpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTIuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJiZWxnaXVtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCZXQubWF0Y2hOdW1iZXIgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUZWFtMi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcInVrcmFpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTEuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJiZWxnaXVtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJldC5tYXRjaE51bWJlciA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRlYW0yLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwidWtyYWluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUZWFtMS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcImJlbGdpdW1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QmV0Lm1hdGNoTnVtYmVyID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTIuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJ1a3JhaW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRlYW0xLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwiYmVsZ2l1bVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoc2NvcmUxLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSB8fCBzY29yZTIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGFzdC1zY29yZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sYXN0LWdvYWxcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGdvYWwxLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSB8fCBnb2FsMi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sYXN0LXNjb3JlXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3QtZ29hbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYobGFzdEJldC5maXJzdEdvYWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGFzdEJldC5maXJzdEdvYWwgPT09IFwidWFcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RHb2FsLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwidWtyYWluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxhc3RCZXQuZmlyc3RHb2FsID09PSBcImJlXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0R29hbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcImJlbGdpdW1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsYXN0QmV0LmZpcnN0R29hbCA9PT0gXCJkcmF3XCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0R29hbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcImRyYXdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihnb2FsMS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgfHwgZ29hbDIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3RcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCFiZXRBdmFpbGFibGUpe1xuICAgICAgICAgICAgICAgICAgICBsYXN0UHJlZGljdC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGxhc3RQcmVkaWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IEluaXRQYWdlID0gKCkgPT4ge1xuICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgIHJlbmRlclVzZXJzKCk7XG4gICAgICAgIHVwZGF0ZVRvcEZvcmVjYXN0cyhjdXJyZW50VGFiKVxuICAgICAgICByZWZyZXNoQmV0SW5mbyh1c2VySWQpXG4gICAgfVxuXG4gICAgbGV0IGNoZWNrVXNlckF1dGggPSAoKSA9PiB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIHlvdUFyZUluQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgdW5hdXRoTXNncy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgeW91QXJlSW5CdG4gb2YgeW91QXJlSW5CdG5zKSB7XG4gICAgICAgICAgICAgICAgeW91QXJlSW5CdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2VCZXQoYmV0KSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2NvbnRhaW5lci5hY3RpdmVcIilcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fdGVhbS1pbmNyZWFzZSwgLnByZWRpY3RfX3RlYW0tZGVjcmVhc2UnKVxuICAgICAgICAgICAgLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBzY29yZUluaXQoYnRuKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdvYWxDb250XCIpXG4gICAgICAgIC8vIGNvbnN0IGFjdGl2ZUlucHV0ID0gYWN0aXZlVGFiLnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fcmFkaW8taXRlbSBpbnB1dFwiKVxuXG5cblxuICAgICAgICBsZXQgcmVxID0ge1xuICAgICAgICAgICAgbWF0Y2hOdW1iZXI6IGJldC5tYXRjaE51bWJlcixcbiAgICAgICAgICAgIHVzZXJpZDogYmV0LnVzZXJpZCxcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVRhYnMpXG4gICAgICAgIGZvciAoY29uc3QgdGFiIG9mIGFjdGl2ZVRhYnMpIHtcbiAgICAgICAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlSW5wdXQgPSB0YWIucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19yYWRpby1pdGVtLl9hY3RpdmUgaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFiKVxuXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZUlucHV0KVxuICAgICAgICAgICAgICAgICAgICByZXEuZmlyc3RHb2FsID0gYWN0aXZlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBpZiAoYmV0LmZpcnN0R29hbFVwZGF0ZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJldC5maXJzdEdvYWwpXG4gICAgICAgICAgICByZXEuZmlyc3RHb2FsID0gYmV0LmZpcnN0R29hbDtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJldC5nb2Fsc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIHJlcS50ZWFtMSA9IGJldC50ZWFtMTtcbiAgICAgICAgICAgIHJlcS50ZWFtMiA9IGJldC50ZWFtMjtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVJbnB1dCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVRhYilcblxuICAgICAgICByZXF1ZXN0KCcvYmV0Jywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdCZXQgcGxhY2VkOicsIHJlcyk7XG4gICAgICAgICAgICAgICAgSW5pdFBhZ2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgcGxhY2luZyBiZXQ6JywgZXJyb3IpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkxOG5EYXRhKTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb2Fscy1vci16ZXJvcycpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmshXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgLy8gY3VycmVudEJldCA9IG5ldyBCZXQodXNlcklkLCBtYXRjaE51bWJlcilcbiAgICAgICAgICAgIEluaXRQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBJbml0UGFnZSgpO1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgSW5pdFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgfVxuICAgICAgICBJbml0UGFnZSgpXG5cbiAgICAgICAgcGxhY2VCZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudEJldClcbiAgICAgICAgICAgIGlmKGN1cnJlbnRCZXQpe1xuICAgICAgICAgICAgICAgIHBsYWNlQmV0KGN1cnJlbnRCZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY3VycmVudEJldCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50QmV0ID0gbmV3IEJldCh1c2VySWQsIG1hdGNoTnVtYmVyKVxuICAgICAgICAgICAgICAgIHBsYWNlQmV0KGN1cnJlbnRCZXQpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRCZXQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjb3JlKG1hdGNoTnVtYmVyLCB0ZWFtMUdvYWxzLCB0ZWFtMkdvYWxzKSB7XG4gICAgICAgIGlmIChjdXJyZW50QmV0ICYmIGN1cnJlbnRCZXQubWF0Y2hOdW1iZXIgPT09IG1hdGNoTnVtYmVyKSB7XG4gICAgICAgICAgICBjdXJyZW50QmV0LnVwZGF0ZUdvYWxzKHRlYW0xR29hbHMsIHRlYW0yR29hbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudEJldCA9IG5ldyBCZXQodXNlcklkLCBtYXRjaE51bWJlciwgdGVhbTFHb2FscywgdGVhbTJHb2Fscyk7XG4gICAgICAgICAgICBjdXJyZW50QmV0LnVwZGF0ZUdvYWxzKHRlYW0xR29hbHMsIHRlYW0yR29hbHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRCZXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVGaXJzdEdvYWwobWF0Y2hOdW1iZXIsIGZpcnN0R29hbCkge1xuICAgICAgICBpZiAoY3VycmVudEJldCAmJiBjdXJyZW50QmV0Lm1hdGNoTnVtYmVyID09PSBtYXRjaE51bWJlcikge1xuICAgICAgICAgICAgY3VycmVudEJldC51cGRhdGVGaXJzdEdvYWwoZmlyc3RHb2FsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRCZXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVUb3BGb3JlY2FzdHMobWF0Y2hOdW1iZXIpIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7bWF0Y2hOdW1iZXJ9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEudG9wRm9yZWNhc3RzKTsgLy8g0J/QtdGA0LXQstGW0YDQutCwINC+0YLRgNC40LzQsNC90LjRhSDQtNCw0L3QuNGFXG5cbiAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19mb3JlY2FzdHMnKTtcbiAgICAgICAgICAgIGZvcmVjYXN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuXG4gICAgICAgICAgICBkYXRhLnRvcEZvcmVjYXN0cy5mb3JFYWNoKGZvcmVjYXN0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JlY2FzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJlZGljdF9fZm9yZWNhc3RzLWl0ZW0nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KGZvcmVjYXN0LnBlcmNlbnRhZ2UpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZVNwYW4udGV4dENvbnRlbnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JlY2FzdFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgICR7Zm9yZWNhc3QuZm9yZWNhc3QgPz8gXCIwLTBcIn1gKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQocGVyY2VudGFnZVNwYW4pO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChmb3JlY2FzdFRleHQpO1xuXG4gICAgICAgICAgICAgICAgZm9yZWNhc3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0SXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdG9wIGZvcmVjYXN0czonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW5kZXJVc2VycygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ9GA0LXQvdC00LXRgCDQv9GA0LDRhtGO0ZQnKVxuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHtjdXJyZW50VGFiVGFibGV9YClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJzID0gZGF0YS51c2Vyc1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlcnMpXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTY29yZVRhYkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLXNjb3JlLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzR29hbFRhYkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLWdvYWwuYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBpZih1c2Vycy5sZW5ndGggPj0gNTApe1xuICAgICAgICAgICAgICAgICAgICBzaG93VG9wRm9yZWNhc3QgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHVzZXJzLmxlbmd0aCA8IDUwKXtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1RvcEZvcmVjYXN0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTY29yZVRhYkFjdGl2ZSAmJiBzaG93VG9wRm9yZWNhc3QpIHRvcEZvcmVjYXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgaWYgKGlzR29hbFRhYkFjdGl2ZSkgdG9wRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcblxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIHVzZXJJZClcblxuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCBjdXJyZW50VGFiVGFibGUpXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VycylcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIG1hdGNoTnVtYmVyKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgaWYgKCF1c2VycyB8fCAhdXNlcnMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgLy8gLy8g0KTRltC70YzRgtGA0YPRlNC80L4g0LrQvtGA0LjRgdGC0YPQstCw0YfRltCyLCDRj9C60ZYg0LfRgNC+0LHQuNC70Lgg0YHRgtCw0LLQutGDINC90LAg0LLQutCw0LfQsNC90LjQuSDQvNCw0YLRh1xuICAgICAgICAvLyBjb25zdCB1c2VycyA9IHVzZXJzLmZpbHRlcih1c2VyID0+XG4gICAgICAgIC8vICAgICB1c2VyLmJldHMuc29tZShiZXQgPT4gYmV0Lm1hdGNoTnVtYmVyID09PSBtYXRjaE51bWJlcilcbiAgICAgICAgLy8gKTtcblxuICAgICAgICAvLyBpZiAoIXVzZXJzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIC8vINCX0L3QsNGF0L7QtNC40LzQviDQv9C+0YLQvtGH0L3QvtCz0L4g0LrQvtGA0LjRgdGC0YPQstCw0YfQsFxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG5cbiAgICAgICAgLy8g0JLQuNCy0L7QtNC40LzQviDQstGB0ZbRhSDRltC90YjQuNGFINC60L7RgNC40YHRgtGD0LLQsNGH0ZbQsiDRgyByZXN1bHRzVGFibGVcbiAgICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyLnVzZXJpZCAhPT0gY3VycmVudFVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIGZhbHNlLCByZXN1bHRzVGFibGUsIHVzZXJzLCBtYXRjaE51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCS0LjQstC+0LTQuNC80L4g0L/QvtGC0L7Rh9C90L7Qs9C+INC60L7RgNC40YHRgtGD0LLQsNGH0LAg0LIgcmVzdWx0c1RhYmxlT3RoZXJcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBtYXRjaE51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIGFsbFVzZXJzLCBtYXRjaE51bWJlcikge1xuICAgICAgICBsZXQgbWF0Y2hEYXRlO1xuXG4gICAgICAgIGlmIChtYXRjaE51bWJlciA9PT0gMSkge1xuICAgICAgICAgICAgbWF0Y2hEYXRlID0gRklSU1RfTUFUQ0hfREFURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hOdW1iZXIgPT09IDIpIHtcbiAgICAgICAgICAgIG1hdGNoRGF0ZSA9IFNFQ09ORF9NQVRDSF9EQVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaE51bWJlciA9PT0gMykge1xuICAgICAgICAgICAgbWF0Y2hEYXRlID0gVEhJUkRfTUFUQ0hfREFURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hOdW1iZXIgPT09IDQpIHtcbiAgICAgICAgICAgIG1hdGNoRGF0ZSA9IEZPVVJUSF9NQVRDSF9EQVRFO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsVXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgYWRkaXRpb25hbFVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtpc0N1cnJlbnRVc2VyID8gdXNlci51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXIudXNlcmlkKX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgJHtjdXJyZW50RGF0ZSA+PSBtYXRjaERhdGUgP1xuICAgICAgICAgICAgYDxzcGFuPiR7dXNlci50ZWFtMSAhPT0gdW5kZWZpbmVkICYmIHVzZXIudGVhbTEgIT09IG51bGwgPyB1c2VyLnRlYW0xIDogXCItXCJ9PC9zcGFuPjxpbWcgc3JjPVwiaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nb2Fscy1vci16ZXJvZXMvaW1nL3ZzLnBuZ1wiIGFsdD1cInZzXCI+PHNwYW4+JHt1c2VyLnRlYW0yICE9PSB1bmRlZmluZWQgJiYgdXNlci50ZWFtMiAhPT0gbnVsbCA/IHVzZXIudGVhbTIgOiBcIi1cIn08L3NwYW4+YCA6XG4gICAgICAgICAgICBgPHNwYW4+Kio8L3NwYW4+PGltZyBzcmM9XCJodHRwczovL2Zhdi1wcm9tLmNvbS9odG1sL2dvYWxzLW9yLXplcm9lcy9pbWcvdnMucG5nXCIgYWx0PVwidnNcIj48c3Bhbj4qKjwvc3Bhbj5gXG4gICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAke3VzZXIud2lubmVyID09PSB0cnVlICA/XG4gICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCJwcml6ZVwiPioqKioqPC9kaXY+YCA6XG4gICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCJub1dpbm5lcnNcIj4qKioqKjwvZGl2PmBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJHt1c2VyLmJvbnVzRmlyc3RHb2FsID09PSB0cnVlICA/XG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwic3M1MDBcIj4qKioqKjwvZGl2PmAgOlxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIiBkYXRhLXRyYW5zbGF0ZT1cIm5vV2lubmVyc1wiPioqKioqPC9kaXY+YFxuICAgICAgICB9XG4gICAgYDtcblxuICAgICAgICBpZiAoaXNDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgYWRkaXRpb25hbFVzZXJSb3cuY2xhc3NMaXN0LmFkZChcInlvdVwiKTtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke2lzQ3VycmVudFVzZXIgPyB1c2VyLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlci51c2VyaWQpfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7dXNlci50ZWFtMSAhPT0gdW5kZWZpbmVkICYmIHVzZXIudGVhbTEgIT09IG51bGwgPyB1c2VyLnRlYW0xIDogXCItXCJ9PC9zcGFuPjxpbWcgc3JjPVwiaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nb2Fscy1vci16ZXJvZXMvaW1nL3ZzLnBuZ1wiIGFsdD1cInZzXCI+PHNwYW4+JHt1c2VyLnRlYW0yICE9PSB1bmRlZmluZWQgJiYgdXNlci50ZWFtMiAhPT0gbnVsbCA/IHVzZXIudGVhbTIgOiBcIi1cIn08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICR7dXNlci53aW5uZXIgPT09IHRydWUgID9cbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwicHJpemVcIj4qKioqKjwvZGl2PmAgOlxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCJub1dpbm5lcnNcIj4qKioqKjwvZGl2PmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAke3VzZXIuYm9udXNGaXJzdEdvYWwgPT09IHRydWUgID9cbiAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIiBkYXRhLXRyYW5zbGF0ZT1cInNzNTAwXCI+KioqKio8L2Rpdj5gIDpcbiAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIiBkYXRhLXRyYW5zbGF0ZT1cIm5vV2lubmVyc1wiPioqKioqPC9kaXY+YFxuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuICAgICAgICAgICAgY29uc3QgeW91QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHlvdUJsb2NrLmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cteW91Jyk7XG4gICAgICAgICAgICB5b3VCbG9jay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgJ3RhYmxlWW91Jyk7XG4gICAgICAgICAgICAvLyB5b3VCbG9jay50ZXh0Q29udGVudCA9IFwiWW91XCI7XG4gICAgICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5pbnNlcnRCZWZvcmUoeW91QmxvY2ssIGFkZGl0aW9uYWxVc2VyUm93LmNoaWxkcmVuWzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhYmxlLmFwcGVuZChhZGRpdGlvbmFsVXNlclJvdyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICAvLyAzRCBhbmltXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlYW0sIC5hbmltQ2FyZCwgLmFuaW1SaWdodFwiKTsgLy8g0JTQvtCx0LDQstC70Y/QtdC8IC5hbmltUmlnaHRcbiAgICBsZXQgYW5nbGUgPSAwO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUNhcmRzKCkge1xuICAgICAgICBhbmdsZSArPSAwLjk7IC8vIHNwZWVkXG4gICAgICAgIGNvbnN0IHJvdGF0ZVggPSBNYXRoLnNpbihhbmdsZSAqIChNYXRoLlBJIC8gMTgwKSkgKiAxMDsgLy8g0JrQvtC70LXQsdCw0L3QuNC1INC/0L4gWFxuICAgICAgICBjb25zdCByb3RhdGVZID0gTWF0aC5jb3MoYW5nbGUgKiAoTWF0aC5QSSAvIDE4MCkpICogMTA7IC8vINCa0L7Qu9C10LHQsNC90LjQtSDQv9C+IFlcblxuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgaWYgKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW5pbVJpZ2h0XCIpKSB7XG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgkey1yb3RhdGVZfWRlZykgcm90YXRlWCgkey1yb3RhdGVYfWRlZylgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVZKCR7cm90YXRlWX1kZWcpIHJvdGF0ZVgoJHtyb3RhdGVYfWRlZylgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZUNhcmRzKTtcbiAgICB9XG4gICAgYW5pbWF0ZUNhcmRzKCk7XG5cbiAgICAvLyBwcmVkaWN0IHRhYnNcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX3RhYnMtZ2xvYmFsID4gZGl2LCAucHJlZGljdF9fdGFicy1kYXRlcyA+IGRpdicpO1xuICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fY29udGFpbmVyJyk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUYWJDbGljayhldmVudCkge1xuICAgICAgICBsZXQgbWF0Y2hEYXRlO1xuXG4gICAgICAgIGNvbnN0IGNsaWNrZWRUYWIgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5wcmVkaWN0X190YWJzLWRhdGVcIikgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucHJlZGljdF9fdGFicy1nb2FsXCIpIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnByZWRpY3RfX3RhYnMtc2NvcmVcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNsaWNrZWRUYWIpXG4gICAgICAgIGNvbnN0IHRhYlBhaXIgPSBjbGlja2VkVGFiLmNsb3Nlc3QoJy5wcmVkaWN0X190YWJzLWdsb2JhbCcpIHx8IGNsaWNrZWRUYWIuY2xvc2VzdCgnLnByZWRpY3RfX3RhYnMtZGF0ZXMnKTtcblxuICAgICAgICBsZXQgY3VycmVudE1hdGNoID0gTnVtYmVyKGNsaWNrZWRUYWIuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXRjaC1udW1iZXJcIikpXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coY2xpY2tlZFRhYilcblxuICAgICAgICBpZihjdXJyZW50TWF0Y2ggPT09IDEpe1xuICAgICAgICAgICAgbWF0Y2hEYXRlID0gRklSU1RfTUFUQ0hfREFURVxuICAgICAgICB9XG4gICAgICAgIGlmKGN1cnJlbnRNYXRjaCA9PT0gMil7XG4gICAgICAgICAgICBtYXRjaERhdGUgPSBTRUNPTkRfTUFUQ0hfREFURVxuICAgICAgICB9XG4gICAgICAgIGlmKGN1cnJlbnRNYXRjaCA9PT0gMyl7XG4gICAgICAgICAgICBtYXRjaERhdGUgPSBUSElSRF9NQVRDSF9EQVRFXG4gICAgICAgIH1cbiAgICAgICAgaWYoY3VycmVudE1hdGNoID09PSA0KXtcbiAgICAgICAgICAgIG1hdGNoRGF0ZSA9IEZPVVJUSF9NQVRDSF9EQVRFXG4gICAgICAgIH1cbiAgICAgICAgaWYoY3VycmVudERhdGUgPiBtYXRjaERhdGUpe1xuICAgICAgICAgICAgcGxhY2VCZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcGxhY2VCZXRCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9sb2NrXCIpXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChjbGlja2VkVGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgaWYgKHRhYlBhaXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhaXIgPSB0YWJQYWlyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKTtcbiAgICAgICAgICAgIGlmIChwYWlyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYWlyWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2xpY2tlZFRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgdXBkYXRlQ29udGFpbmVycygpO1xuICAgICAgICAvLyByZWZyZXNoQmV0SW5mbyh1c2VySWQpXG4gICAgICAgIGlmKGNsaWNrZWRUYWIuY2xvc2VzdCgnLnByZWRpY3RfX3RhYnMtZGF0ZXMnKSl7XG4gICAgICAgICAgICB1cGRhdGVUb3BGb3JlY2FzdHMoY3VycmVudE1hdGNoKVxuICAgICAgICAgICAgY3VycmVudEJldCA9IG5ldyBCZXQodXNlcklkLCBjdXJyZW50TWF0Y2gpXG4gICAgICAgICAgICBtYXRjaE51bWJlciA9IE51bWJlcihjbGlja2VkVGFiLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0Y2gtbnVtYmVyXCIpKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmVkaWN0X190ZWFtLW51bWJlclwiKS5mb3JFYWNoKChzY29yZSwgaSkgPT57XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWF0Y2hEYXRlLCBtYXRjaE51bWJlcilcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50RGF0ZSA+IG1hdGNoRGF0ZSAmJiBpID09PSAxICYmIG1hdGNoTnVtYmVyID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUudGV4dENvbnRlbnQgPSBcIjBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGN1cnJlbnREYXRlID4gbWF0Y2hEYXRlICYmIGkgPT09IDAgJiYgbWF0Y2hOdW1iZXIgPT09IDEpe1xuICAgICAgICAgICAgICAgICAgICBzY29yZS50ZXh0Q29udGVudCA9IFwiMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGVsc2V7XG4gICAgICAgICAgICAgICAgLy8gICAgIHNjb3JlLnRleHRDb250ZW50ID0gXCIwXCJcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgICAgICBsb2NrTWF0Y2hDb250YWluZXIoRklSU1RfTUFUQ0hfREFURSwgMSk7IC8vINCU0LvRjyDQv9C10YDRiNC+0LPQviDQvNCw0YLRh9GDXG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihTRUNPTkRfTUFUQ0hfREFURSwgMik7IC8vINCU0LvRjyDQtNGA0YPQs9C+0LPQviDQvNCw0YLRh9GDXG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihUSElSRF9NQVRDSF9EQVRFLCAzKTsgLy8g0JTQu9GPINGC0YDQtdGC0YzQvtCz0L4g0LzQsNGC0YfRg1xuICAgICAgICBsb2NrTWF0Y2hDb250YWluZXIoRk9VUlRIX01BVENIX0RBVEUsIDQpOyAvLyDQlNC70Y8g0YfQtdGC0LLQtdGA0YLQvtCz0L4g0LzQsNGC0YfRg1xuICAgIH1cblxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlVGFiQ2xpY2spKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbnRhaW5lcnMoKSB7XG4gICAgICAgIGNvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXIgPT4gY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcblxuICAgICAgICBjb25zdCBpc1Njb3JlVGFiQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3RhYnMtc2NvcmUuYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGlzR29hbFRhYkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLWdvYWwuYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGlzRGF0ZTFBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1kYXRlLmRhdGUxLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBpc0RhdGUyQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3RhYnMtZGF0ZS5kYXRlMi5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgaXNEYXRlM0FjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLWRhdGUuZGF0ZTMuYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGlzRGF0ZTRBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1kYXRlLmRhdGU0LmFjdGl2ZScpO1xuXG5cbiAgICAgICAgaWYgKCEhaXNTY29yZVRhYkFjdGl2ZSkge1xuICAgICAgICAgICAgaWYoc2hvd1RvcEZvcmVjYXN0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY29yZVwiKVxuICAgICAgICAgICAgICAgIHRvcEZvcmVjYXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0RhdGUxQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRhaW5lci5zY29yZS0xJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZTJBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGFpbmVyLnNjb3JlLTInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlM0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250YWluZXIuc2NvcmUtMycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0RhdGU0QWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRhaW5lci5zY29yZS00JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoISFpc0dvYWxUYWJBY3RpdmUpIHtcbiAgICAgICAgICAgIGlmKHNob3dUb3BGb3JlY2FzdCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NvcmVcIilcbiAgICAgICAgICAgICAgICB0b3BGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGF0ZTFBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGFpbmVyLmdvYWwtMScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0RhdGUyQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRhaW5lci5nb2FsLTInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlM0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250YWluZXIuZ29hbC0zJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZTRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGFpbmVyLmdvYWwtNCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9zY29yZVxuXG4gICAgZnVuY3Rpb24gc2NvcmVJbml0KGJ0bil7XG4gICAgICAgIGNvbnN0IHRlYW1Db250cm9sID0gYnRuLmNsb3Nlc3QoJy5wcmVkaWN0X190ZWFtLWNvbnRyb2wnKTtcbiAgICAgICAgY29uc3QgdGVhbU51bWJlciA9IHRlYW1Db250cm9sLnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190ZWFtLW51bWJlcicpXG4gICAgICAgIGNvbnN0IG1hdGNoQ29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5wcmVkaWN0X19jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbWF0Y2hOdW1iZXIgPSBwYXJzZUludChtYXRjaENvbnRhaW5lci5kYXRhc2V0Lm1hdGNoTnVtYmVyKTtcblxuICAgICAgICBjb25zdCBnZXRHb2FscyA9ICh0ZWFtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbWF0Y2hDb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEtdGVhbT1cIiR7dGVhbX1cIl0gLnByZWRpY3RfX3RlYW0tbnVtYmVyYCk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudCA/IE51bWJlcihlbGVtZW50LnRleHRDb250ZW50KSB8fCAwIDogMDtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGNvbnN0IHRlYW0xR29hbHMgPSBnZXRHb2FscygndGVhbTEnKSA7XG4gICAgICAgIGNvbnN0IHRlYW0yR29hbHMgPSBnZXRHb2FscygndGVhbTInKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZWFtMUdvYWxzLCB0ZWFtMkdvYWxzKVxuXG4gICAgICAgIHVwZGF0ZVNjb3JlKG1hdGNoTnVtYmVyLCB0ZWFtMUdvYWxzLCB0ZWFtMkdvYWxzKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fdGVhbS1pbmNyZWFzZSwgLnByZWRpY3RfX3RlYW0tZGVjcmVhc2UnKS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICBjb25zdCB0ZWFtQ29udHJvbCA9IGJ0bi5jbG9zZXN0KCcucHJlZGljdF9fdGVhbS1jb250cm9sJyk7XG4gICAgICAgICAgICBjb25zdCB0ZWFtTnVtYmVyID0gdGVhbUNvbnRyb2wucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3RlYW0tbnVtYmVyJylcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoQ29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5wcmVkaWN0X19jb250YWluZXInKTtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQodGVhbU51bWJlci50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygncHJlZGljdF9fdGVhbS1pbmNyZWFzZScpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlYW1OdW1iZXIudGV4dENvbnRlbnQgPSBgJHt2YWx1ZX1gO1xuICAgICAgICAgICAgc2NvcmVJbml0KGJ0bilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJldClcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIC8vdGFibGUgdGFic1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1kYXRlJykuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RhYnMtZGF0ZScpLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY3VycmVudFRhYlRhYmxlID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3RhYnMtZGF0ZS5hY3RpdmVcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXRjaC1udW1iZXJcIikpXG4gICAgICAgICAgICByZW5kZXJVc2VycygpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBcblxuICAgIC8vcG9wdXBzXG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cHModHJpZ2dlckJ1dHRvbnMsIHBvcHVwQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgcG9wdXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpO1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cHNfX2l0ZW0uJHtwb3B1cENsYXNzfWApO1xuICAgICAgICBjb25zdCBwb3B1cEJ0biA9IHBvcHVwc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwc19faXRlbS1idG5cIilcblxuXG4gICAgICAgIGlmICghdHJpZ2dlckJ1dHRvbnMgfHwgIXBvcHVwIHx8ICFwb3B1cHNDb250YWluZXIpIHJldHVybjtcblxuICAgICAgICB0cmlnZ2VyQnV0dG9ucy5mb3JFYWNoKHRyaWdnZXJCdXR0b24gPT4ge1xuICAgICAgICAgICAgdHJpZ2dlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnX29wYWNpdHknKTtcbiAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChwb3B1cENsYXNzKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzX19pdGVtLWNsb3NlJyk7XG4gICAgICAgIGNvbnN0IGJ0bkNsb3NlID0gcG9wdXAucXVlcnlTZWxlY3RvcignLmJ0bi1jbG9zZScpO1xuXG4gICAgICAgIHBvcHVwc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gcG9wdXBzQ29udGFpbmVyIHx8IGUudGFyZ2V0ID09PSBjbG9zZUJ1dHRvbiB8fCBlLnRhcmdldCA9PT0gYnRuQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKSB7XG4gICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX29wYWNpdHknKTtcbiAgICAgICAgICAgIHBvcHVwc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHBvcHVwQ2xhc3MpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBvcHVwQnRuKVxuICAgICAgICBwb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgY2xvc2VQb3B1cCgpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBzZXRQb3B1cHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdpZGVfX2xpc3QtYnRuJyksICdnaWRlUG9wdXAnKTtcbiAgICBzZXRQb3B1cHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX2J0bi50b29rLXBhcnQnKSwgJ19jb25maXJtUG9wdXAnKTtcblxuICAgIC8vZ28gdG8gcHJlZGljdFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9QcmVkaWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVkaWN0XCIpO1xuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gMjtcblxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB0YXJnZXRQb3NpdGlvbixcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByYWRpb0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fcmFkaW8nKTtcblxuICAgIHJhZGlvQ29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X19yYWRpby1pdGVtJyk7XG5cbiAgICAgICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXRzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWUpXG5cbiAgICAgICAgICAgICAgICB1cGRhdGVGaXJzdEdvYWwobWF0Y2hOdW1iZXIsIHRoaXMucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpXG5cbiAgICAvLyBURVNUXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCIxODkwODQ2NVwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1sYXN0UHJlZC0xJykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X19sYXN0LTEnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fbGFzdC1URVNUJykuYWRkKFwiaGlkZVwiKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbGFzdFByZWQtMicpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fbGFzdC1URVNUJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2xhc3QtMScpLmFkZChcImhpZGVcIilcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXRQb3B1cHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi10aGVua3MnKSwgJ19jb25maXJtUG9wdXAnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcHJlZGljdCcpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuY29uZmlybWVkJykuZm9yRWFjaCh1bmNvbmZpcm1lZCA9PiB7XG4gICAgICAgICAgICAgICAgdW5jb25maXJtZWQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbmZpcm1lZCcpLmZvckVhY2goY29uZmlybWVkID0+IHtcbiAgICAgICAgICAgICAgICBjb25maXJtZWQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYWZ0ZXJcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IEZJUlNUX01BVENIX0RBVEUgPSBuZXcgRGF0ZSgnMjAyMi0wMy0yMFQyMToxNTowMCcpXG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihGSVJTVF9NQVRDSF9EQVRFLCAxKTtcbiAgICAgICAgcGxhY2VCZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9jayB0YWJsZVwiKVxuICAgIH0pO1xuXG4gICAgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSA/PyBudWxsXG5cbiAgICB1cGRhdGVUb3BGb3JlY2FzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGVUb3BGb3JlY2FzdHMg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgIH1cblxuXG5cbiAgICBwb3B1bGF0ZVVzZXJzVGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3B1bGF0ZVVzZXJzVGFibGUg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgIH1cblxuICAgIGRpc3BsYXlVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZGlzcGxheVVzZXIg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgIH1cblxuICAgIHJlbmRlclVzZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVuZGVyVXNlcnMg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgICAgICAvLyBzaG93VG9wRm9yZWNhc3QgPSB0cnVlXG4gICAgfVxuXG5cblxuXG5cbn0pKClcbiJdfQ==
