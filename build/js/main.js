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
  var showTopForecast = false;
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
    if (isScoreTabActive) {
      if (showTopForecast) topForecast.classList.remove("hide");
      if (isDate1Active) {
        document.querySelector('.predict__container.score-1').classList.add('active');
      } else if (isDate2Active) {
        document.querySelector('.predict__container.score-2').classList.add('active');
      } else if (isDate3Active) {
        document.querySelector('.predict__container.score-3').classList.add('active');
      } else if (isDate4Active) {
        document.querySelector('.predict__container.score-4').classList.add('active');
      }
    } else if (isGoalTabActive) {
      if (showTopForecast) topForecast.classList.add("hide");
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
  init();

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
  renderUsers = function renderUsers() {
    console.log('renderUsers вимкнено для тесту');
    // showTopForecast = true
  };
  populateUsersTable = function populateUsersTable() {
    console.log('populateUsersTable вимкнено для тесту');
  };
  displayUser = function displayUser() {
    console.log('displayUser вимкнено для тесту');
  };
  showTopForecast = true;
  console.log(showTopForecast);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiX3Nlc3Npb25TdG9yYWdlJGdldEl0IiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsIl9zZXNzaW9uU3RvcmFnZSRnZXRJdDIiLCJhcGlVUkwiLCJ1bmF1dGhNc2dzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwieW91QXJlSW5CdG5zIiwibWFpblBhZ2UiLCJxdWVyeVNlbGVjdG9yIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJwbGFjZUJldEJ0biIsImxhc3RQcmVkaWN0IiwidG9wRm9yZWNhc3QiLCJjdXJyZW50VGFiIiwiTnVtYmVyIiwiZ2V0QXR0cmlidXRlIiwiY3VycmVudFRhYlRhYmxlIiwibWF0Y2hOdW1iZXIiLCJzaG93VG9wRm9yZWNhc3QiLCJGSVJTVF9NQVRDSF9EQVRFIiwiRGF0ZSIsIlNFQ09ORF9NQVRDSF9EQVRFIiwiVEhJUkRfTUFUQ0hfREFURSIsIkZPVVJUSF9NQVRDSF9EQVRFIiwiY3VycmVudERhdGUiLCJsb2NrTWF0Y2hDb250YWluZXIiLCJtYXRjaERhdGUiLCJjb250YWluZXJzIiwiY29uY2F0IiwidGFiIiwiZm9yRWFjaCIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsInNldEludGVydmFsIiwiQmV0IiwidXNlcklkIiwidGVhbTFHb2FscyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInRlYW0yR29hbHMiLCJmaXJzdEdvYWwiLCJfY2xhc3NDYWxsQ2hlY2siLCJ1c2VyaWQiLCJ0ZWFtMSIsInRlYW0yIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJ1cGRhdGVHb2FscyIsImdvYWxzVXBkYXRlZCIsInVwZGF0ZUZpcnN0R29hbCIsImZpcnN0R29hbFVwZGF0ZWQiLCJjYWNoZSIsInByZWRpY3REYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJkZWJ1ZyIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInJvTGVuZyIsImVuTGVuZyIsImkxOG5EYXRhIiwiY3VycmVudEJldCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJfb2JqZWN0U3ByZWFkIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0TGFzdEJldCIsImJldHMiLCJmaW5kIiwiYmV0IiwicmVmcmVzaEJldEluZm8iLCJzY29yZTEiLCJzY29yZTIiLCJzY29yZTMiLCJzY29yZTQiLCJnb2FsMSIsImdvYWwyIiwiZ29hbDMiLCJnb2FsNCIsIm1ldGhvZCIsImRhdGEiLCJiZXRBdmFpbGFibGUiLCJzb21lIiwibGFzdFRlYW0xIiwibGFzdFRlYW0yIiwic2NvcmVUZWFtMSIsInNjb3JlVGVhbTIiLCJyZW1vdmUiLCJsYXN0QmV0IiwidGV4dENvbnRlbnQiLCJiZXRDb25maXJtZWQiLCJpdGVtIiwic2V0QXR0cmlidXRlIiwidHJhbnNsYXRlIiwiY29udGFpbnMiLCJlcnJvciIsImNvbnNvbGUiLCJJbml0UGFnZSIsImNoZWNrVXNlckF1dGgiLCJyZW5kZXJVc2VycyIsInVwZGF0ZVRvcEZvcmVjYXN0cyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJ5b3VBcmVJbkJ0biIsImVyciIsImUiLCJmIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInVuYXV0aE1lcyIsInBsYWNlQmV0IiwiYnRuIiwic2NvcmVJbml0IiwiYWN0aXZlVGFicyIsInJlcSIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJhY3RpdmVJbnB1dCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZFRyYW5zbGF0aW9ucyIsImxvZyIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImVsZW1zIiwiZWxlbSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJfaSIsIl9hcnIiLCJsYW5nIiwiaW5pdCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImMiLCJpIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVNjb3JlIiwiZm9yZWNhc3RzQ29udGFpbmVyIiwidG9wRm9yZWNhc3RzIiwiZm9yZWNhc3QiLCJfZm9yZWNhc3QkZm9yZWNhc3QiLCJmb3JlY2FzdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwicGVyY2VudGFnZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwicGVyY2VudGFnZVNwYW4iLCJmb3JlY2FzdFRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwidXNlcnMiLCJpc1Njb3JlVGFiQWN0aXZlIiwiaXNHb2FsVGFiQWN0aXZlIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsImN1cnJlbnRVc2VyIiwidXNlciIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwiYWxsVXNlcnMiLCJhZGRpdGlvbmFsVXNlclJvdyIsIm1hc2tVc2VySWQiLCJ3aW5uZXIiLCJib251c0ZpcnN0R29hbCIsInlvdUJsb2NrIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJhcHBlbmQiLCJ0b1N0cmluZyIsInNsaWNlIiwiY2FyZHMiLCJhbmdsZSIsImFuaW1hdGVDYXJkcyIsInJvdGF0ZVgiLCJNYXRoIiwic2luIiwiUEkiLCJyb3RhdGVZIiwiY29zIiwiY2FyZCIsInN0eWxlIiwidHJhbnNmb3JtIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGFicyIsImhhbmRsZVRhYkNsaWNrIiwiZXZlbnQiLCJjbGlja2VkVGFiIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRhYlBhaXIiLCJjdXJyZW50TWF0Y2giLCJwYWlyIiwidXBkYXRlQ29udGFpbmVycyIsInNjb3JlIiwiYnV0dG9uIiwiY2hlY2tlZCIsImlzRGF0ZTFBY3RpdmUiLCJpc0RhdGUyQWN0aXZlIiwiaXNEYXRlM0FjdGl2ZSIsImlzRGF0ZTRBY3RpdmUiLCJ0ZWFtQ29udHJvbCIsInRlYW1OdW1iZXIiLCJtYXRjaENvbnRhaW5lciIsInBhcnNlSW50IiwiZGF0YXNldCIsImdldEdvYWxzIiwidGVhbSIsInNldFBvcHVwcyIsInRyaWdnZXJCdXR0b25zIiwicG9wdXBDbGFzcyIsInBvcHVwc0NvbnRhaW5lciIsInBvcHVwIiwicG9wdXBCdG4iLCJ0cmlnZ2VyQnV0dG9uIiwib3ZlcmZsb3ciLCJjbG9zZUJ1dHRvbiIsImJ0bkNsb3NlIiwiY2xvc2VQb3B1cCIsInRhcmdldEVsZW1lbnQiLCJ0YXJnZXRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInJhZGlvQ29udGFpbmVycyIsInJhZGlvSW5wdXRzIiwicmFkaW8iLCJ0b2dnbGUiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiYXV0aEJ0biIsInVuY29uZmlybWVkIiwiY29uZmlybWVkIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFVBQUFBLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLHNCQUFBLEVBQVk7RUFDVCxJQUFNQyxNQUFNLEdBQUcsZ0RBQWdEO0lBQzNEQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0lBQ3RERSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM5Q0Ms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Q0FBQSxFQUFlO0lBQzdCOUUsT0FBTyxDQUFDOEIsR0FBRyxDQUFDLHVDQUF1QyxDQUFDO0VBQ3hELENBQUM7RUFFRG9ELFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQWU7SUFDdEJsRixPQUFPLENBQUM4QixHQUFHLENBQUMsZ0NBQWdDLENBQUM7RUFDakQsQ0FBQztFQUNEcEgsZUFBZSxHQUFHLElBQUk7RUFDdEJzRixPQUFPLENBQUM4QixHQUFHLENBQUNwSCxlQUFlLENBQUM7QUFDaEMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9wcmVkaWN0b3JfZm9vdGJhbGxfcm8nLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgeW91QXJlSW5CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvb2stcGFydCcpLFxuICAgICAgICBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHJlc3VsdHNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzLXRhYmxlJyksXG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMtdGFibGUtb3RoZXInKSxcbiAgICAgICAgcGxhY2VCZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3QtYnRuXCIpLFxuICAgICAgICBsYXN0UHJlZGljdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGFzdFwiKSxcbiAgICAgICAgdG9wRm9yZWNhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcEZvcmVjYXN0XCIpXG5cbiAgICBsZXQgY3VycmVudFRhYiA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX3RhYnMtZGF0ZS5hY3RpdmVcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXRjaC1udW1iZXJcIikpXG4gICAgbGV0IGN1cnJlbnRUYWJUYWJsZSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX190YWJzLWRhdGUuYWN0aXZlXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0Y2gtbnVtYmVyXCIpKVxuICAgIGxldCBtYXRjaE51bWJlciA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2NvbnRhaW5lci5hY3RpdmVcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXRjaC1udW1iZXJcIikpXG4gICAgbGV0IHNob3dUb3BGb3JlY2FzdCA9IGZhbHNlXG5cbiAgICBjb25zdCBGSVJTVF9NQVRDSF9EQVRFID0gbmV3IERhdGUoJzIwMjUtMDQtMjlUMjI6MDA6MDAnKSAvLyDQtNCw0YLQsCDQvNCw0YLRh9GDXG4gICAgY29uc3QgU0VDT05EX01BVENIX0RBVEUgPSBuZXcgRGF0ZSgnMjAyNS0wNC0zMFQyMjowMDowMCcpIC8vINC00LDRgtCwINC80LDRgtGH0YNcbiAgICBjb25zdCBUSElSRF9NQVRDSF9EQVRFID0gbmV3IERhdGUoJzIwMjUtMDUtMDZUMjI6MDA6MDAnKSAvLyDQtNCw0YLQsCDQvNCw0YLRh9GDXG4gICAgY29uc3QgRk9VUlRIX01BVENIX0RBVEUgPSBuZXcgRGF0ZSgnMjAyNS0wNS0wN1QyMjowMDowMCcpIC8vINC00LDRgtCwINC80LDRgtGH0YNcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcblxuICAgIGZ1bmN0aW9uIGxvY2tNYXRjaENvbnRhaW5lcihtYXRjaERhdGUsIG1hdGNoTnVtYmVyKSB7XG4gICAgICAgIGlmIChuZXcgRGF0ZSgpID4gbWF0Y2hEYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnByZWRpY3RfX2NvbnRhaW5lcltkYXRhLW1hdGNoLW51bWJlcj1cIiR7bWF0Y2hOdW1iZXJ9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJlZGljdF9fdGFicy1kYXRlLmFjdGl2ZVtkYXRhLW1hdGNoLW51bWJlcj1cIiR7bWF0Y2hOdW1iZXJ9XCJdYCk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKHRhYil7XG4gICAgICAgICAgICAgICAgcGxhY2VCZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NrTWF0Y2hDb250YWluZXIoRklSU1RfTUFUQ0hfREFURSwgMSk7IC8vINCU0LvRjyDQv9C10YDRiNC+0LPQviDQvNCw0YLRh9GDXG4gICAgbG9ja01hdGNoQ29udGFpbmVyKFNFQ09ORF9NQVRDSF9EQVRFLCAyKTsgLy8g0JTQu9GPINC00YDRg9Cz0L7Qs9C+INC80LDRgtGH0YNcbiAgICBsb2NrTWF0Y2hDb250YWluZXIoVEhJUkRfTUFUQ0hfREFURSwgMyk7IC8vINCU0LvRjyDRgtGA0LXRgtGM0L7Qs9C+INC80LDRgtGH0YNcbiAgICBsb2NrTWF0Y2hDb250YWluZXIoRk9VUlRIX01BVENIX0RBVEUsIDQpOyAvLyDQlNC70Y8g0YfQtdGC0LLQtdGA0YLQvtCz0L4g0LzQsNGC0YfRg1xuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7IC8vINCe0L3QvtCy0LjRgtC4INC/0L7RgtC+0YfQvdGDINC00LDRgtGDXG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihGSVJTVF9NQVRDSF9EQVRFLCAxKTtcbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKFNFQ09ORF9NQVRDSF9EQVRFLCAyKTtcbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKFRISVJEX01BVENIX0RBVEUsIDMpO1xuICAgICAgICBsb2NrTWF0Y2hDb250YWluZXIoRk9VUlRIX01BVENIX0RBVEUsIDQpO1xuICAgIH0sIDYwMDAwMCk7IC8vINCe0L3QvtCy0LvRjtCy0LDRgtC4INC60L7QttC90ZYgMTAg0YXQslxuXG4gICAgY2xhc3MgQmV0IHtcbiAgICAgICAgY29uc3RydWN0b3IodXNlcklkLCBtYXRjaE51bWJlciwgdGVhbTFHb2FscyA9IDAsIHRlYW0yR29hbHMgPSAwLCBmaXJzdEdvYWwpIHtcbiAgICAgICAgICAgIGlmKHVzZXJJZCAhPT0gbnVsbCkgdGhpcy51c2VyaWQgPSB1c2VySWQ7XG4gICAgICAgICAgICB0aGlzLm1hdGNoTnVtYmVyID0gbWF0Y2hOdW1iZXI7XG4gICAgICAgICAgICB0aGlzLnRlYW0xID0gdGVhbTFHb2FscztcbiAgICAgICAgICAgIHRoaXMudGVhbTIgPSB0ZWFtMkdvYWxzO1xuICAgICAgICAgICAgaWYoZmlyc3RHb2FsICE9PSB1bmRlZmluZWQpIHRoaXMuZmlyc3RHb2FsID0gZmlyc3RHb2FsO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlR29hbHModGVhbTFHb2FscywgdGVhbTJHb2Fscykge1xuICAgICAgICAgICAgaWYgKHRlYW0xR29hbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVhbTEgPSB0ZWFtMUdvYWxzICE9PSBudWxsID8gdGVhbTFHb2FscyA6IHRoaXMudGVhbTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGVhbTJHb2FscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZWFtMiA9IHRlYW0yR29hbHMgIT09IG51bGwgPyB0ZWFtMkdvYWxzIDogdGhpcy50ZWFtMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ29hbHNVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUZpcnN0R29hbChmaXJzdEdvYWwpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdEdvYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RHb2FsID0gZmlyc3RHb2FsICE9PSBudWxsID8gZmlyc3RHb2FsIDogdGhpcy5maXJzdEdvYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZpcnN0R29hbFVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FjaGUgPSB7fTtcbiAgICBsZXQgcHJlZGljdERhdGEgPSBbXTtcblxuICAgIGxldCB0cmFuc2xhdGVTdGF0ZSA9IHRydWVcbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPz8gXCJyb1wiXG4gICAgLy8gbGV0IGxvY2FsZSA9IFwidWtcIlxuXG4gICAgY29uc3Qgcm9MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG5cbiAgICBsZXQgdXNlcklkO1xuICAgIC8vIHVzZXJJZCA9IDEwMDMwMDI2ODtcblxuICAgIGxldCBjdXJyZW50QmV0O1xuXG4gICAgaWYgKHJvTGVuZykgbG9jYWxlID0gJ3JvJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIH1cblxuICAgIGNvbnN0IGdldExhc3RCZXQgPSAoYmV0cywgbWF0Y2hOdW1iZXIpID0+e1xuICAgICAgICBpZighYmV0cykgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiBiZXRzLmZpbmQoYmV0ID0+IGJldC5tYXRjaE51bWJlciA9PT0gbWF0Y2hOdW1iZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hCZXRJbmZvKHVzZXJJZCkge1xuICAgICAgICBjb25zdCBzY29yZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlLTFcIilcbiAgICAgICAgY29uc3Qgc2NvcmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZS0yXCIpXG4gICAgICAgIGNvbnN0IHNjb3JlMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUtM1wiKVxuICAgICAgICBjb25zdCBzY29yZTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlLTRcIilcbiAgICAgICAgY29uc3QgZ29hbDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWwtMVwiKVxuICAgICAgICBjb25zdCBnb2FsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbC0yXCIpXG4gICAgICAgIGNvbnN0IGdvYWwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsLTNcIilcbiAgICAgICAgY29uc3QgZ29hbDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWwtNFwiKVxuICAgICAgICBjb25zdCBtYXRjaE51bWJlciA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX3RhYnMtZGF0ZS5hY3RpdmVcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXRjaC1udW1iZXJcIikpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoTnVtYmVyKVxuXG4gICAgICAgIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmKGRhdGEuYmV0cyl7XG4gICAgICAgICAgICAgICAgY29uc3QgYmV0QXZhaWxhYmxlID0gZGF0YS5iZXRzLnNvbWUoYmV0ID0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmV0Lm1hdGNoTnVtYmVyID09PSBtYXRjaE51bWJlclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYmV0QXZhaWxhYmxlKVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RUZWFtMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGFzdC10ZWFtLnRlYW0xXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RUZWFtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGFzdC10ZWFtLnRlYW0yXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjb3JlVGVhbTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlVGVhbTFcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NvcmVUZWFtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmVUZWFtMlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdEdvYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3QtY291bnRyeVwiKTtcbiAgICAgICAgICAgICAgICBpZihiZXRBdmFpbGFibGUpe1xuICAgICAgICAgICAgICAgICAgICBsYXN0UHJlZGljdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0QmV0ID0gZ2V0TGFzdEJldChkYXRhLmJldHMsIG1hdGNoTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVUZWFtMS50ZXh0Q29udGVudCA9IGxhc3RCZXQudGVhbTEgPT09IHVuZGVmaW5lZCA/IFwiLVwiIDpgJHtsYXN0QmV0LnRlYW0xfWA7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlVGVhbTIudGV4dENvbnRlbnQgPSBsYXN0QmV0LnRlYW0yID09PSB1bmRlZmluZWQgPyBcIi1cIiA6YCR7bGFzdEJldC50ZWFtMn1gO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsYXN0QmV0KVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QmV0LmJldENvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmVkaWN0X19sYXN0LXJlc3VsdC51bmNvbmZpcm1lZFwiKS5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZGljdF9fbGFzdC1yZXN1bHQuY29uZmlybWVkXCIpLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmVkaWN0X19sYXN0LXJlc3VsdC51bmNvbmZpcm1lZFwiKS5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZGljdF9fbGFzdC1yZXN1bHQuY29uZmlybWVkXCIpLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCZXQubWF0Y2hOdW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUZWFtMS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcInVrcmFpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTIuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJiZWxnaXVtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCZXQubWF0Y2hOdW1iZXIgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUZWFtMi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcInVrcmFpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTEuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJiZWxnaXVtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJldC5tYXRjaE51bWJlciA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRlYW0yLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwidWtyYWluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUZWFtMS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcImJlbGdpdW1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QmV0Lm1hdGNoTnVtYmVyID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTIuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJ1a3JhaW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRlYW0xLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwiYmVsZ2l1bVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoc2NvcmUxLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSB8fCBzY29yZTIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGFzdC1zY29yZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sYXN0LWdvYWxcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGdvYWwxLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSB8fCBnb2FsMi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sYXN0LXNjb3JlXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3QtZ29hbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYobGFzdEJldC5maXJzdEdvYWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGFzdEJldC5maXJzdEdvYWwgPT09IFwidWFcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RHb2FsLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwidWtyYWluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxhc3RCZXQuZmlyc3RHb2FsID09PSBcImJlXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0R29hbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcImJlbGdpdW1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsYXN0QmV0LmZpcnN0R29hbCA9PT0gXCJkcmF3XCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0R29hbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcImRyYXdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihnb2FsMS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgfHwgZ29hbDIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3RcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCFiZXRBdmFpbGFibGUpe1xuICAgICAgICAgICAgICAgICAgICBsYXN0UHJlZGljdC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGxhc3RQcmVkaWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IEluaXRQYWdlID0gKCkgPT4ge1xuICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgIHJlbmRlclVzZXJzKCk7XG4gICAgICAgIHVwZGF0ZVRvcEZvcmVjYXN0cyhjdXJyZW50VGFiKVxuICAgICAgICByZWZyZXNoQmV0SW5mbyh1c2VySWQpXG4gICAgfVxuXG4gICAgbGV0IGNoZWNrVXNlckF1dGggPSAoKSA9PiB7XG4gICAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgICAgIHlvdUFyZUluQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgdW5hdXRoTXNncy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgeW91QXJlSW5CdG4gb2YgeW91QXJlSW5CdG5zKSB7XG4gICAgICAgICAgICAgICAgeW91QXJlSW5CdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2VCZXQoYmV0KSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2NvbnRhaW5lci5hY3RpdmVcIilcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fdGVhbS1pbmNyZWFzZSwgLnByZWRpY3RfX3RlYW0tZGVjcmVhc2UnKVxuICAgICAgICAgICAgLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBzY29yZUluaXQoYnRuKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdvYWxDb250XCIpXG4gICAgICAgIC8vIGNvbnN0IGFjdGl2ZUlucHV0ID0gYWN0aXZlVGFiLnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fcmFkaW8taXRlbSBpbnB1dFwiKVxuXG5cblxuICAgICAgICBsZXQgcmVxID0ge1xuICAgICAgICAgICAgbWF0Y2hOdW1iZXI6IGJldC5tYXRjaE51bWJlcixcbiAgICAgICAgICAgIHVzZXJpZDogYmV0LnVzZXJpZCxcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVRhYnMpXG4gICAgICAgIGZvciAoY29uc3QgdGFiIG9mIGFjdGl2ZVRhYnMpIHtcbiAgICAgICAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlSW5wdXQgPSB0YWIucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19yYWRpby1pdGVtLl9hY3RpdmUgaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFiKVxuXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZUlucHV0KVxuICAgICAgICAgICAgICAgICAgICByZXEuZmlyc3RHb2FsID0gYWN0aXZlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBpZiAoYmV0LmZpcnN0R29hbFVwZGF0ZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJldC5maXJzdEdvYWwpXG4gICAgICAgICAgICByZXEuZmlyc3RHb2FsID0gYmV0LmZpcnN0R29hbDtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJldC5nb2Fsc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIHJlcS50ZWFtMSA9IGJldC50ZWFtMTtcbiAgICAgICAgICAgIHJlcS50ZWFtMiA9IGJldC50ZWFtMjtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVJbnB1dCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVRhYilcblxuICAgICAgICByZXF1ZXN0KCcvYmV0Jywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdCZXQgcGxhY2VkOicsIHJlcyk7XG4gICAgICAgICAgICAgICAgSW5pdFBhZ2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgcGxhY2luZyBiZXQ6JywgZXJyb3IpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkxOG5EYXRhKTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb2Fscy1vci16ZXJvcycpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmshXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgLy8gY3VycmVudEJldCA9IG5ldyBCZXQodXNlcklkLCBtYXRjaE51bWJlcilcbiAgICAgICAgICAgIEluaXRQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBJbml0UGFnZSgpO1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgSW5pdFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgfVxuICAgICAgICBJbml0UGFnZSgpXG5cbiAgICAgICAgcGxhY2VCZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudEJldClcbiAgICAgICAgICAgIGlmKGN1cnJlbnRCZXQpe1xuICAgICAgICAgICAgICAgIHBsYWNlQmV0KGN1cnJlbnRCZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY3VycmVudEJldCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50QmV0ID0gbmV3IEJldCh1c2VySWQsIG1hdGNoTnVtYmVyKVxuICAgICAgICAgICAgICAgIHBsYWNlQmV0KGN1cnJlbnRCZXQpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRCZXQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjb3JlKG1hdGNoTnVtYmVyLCB0ZWFtMUdvYWxzLCB0ZWFtMkdvYWxzKSB7XG4gICAgICAgIGlmIChjdXJyZW50QmV0ICYmIGN1cnJlbnRCZXQubWF0Y2hOdW1iZXIgPT09IG1hdGNoTnVtYmVyKSB7XG4gICAgICAgICAgICBjdXJyZW50QmV0LnVwZGF0ZUdvYWxzKHRlYW0xR29hbHMsIHRlYW0yR29hbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudEJldCA9IG5ldyBCZXQodXNlcklkLCBtYXRjaE51bWJlciwgdGVhbTFHb2FscywgdGVhbTJHb2Fscyk7XG4gICAgICAgICAgICBjdXJyZW50QmV0LnVwZGF0ZUdvYWxzKHRlYW0xR29hbHMsIHRlYW0yR29hbHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRCZXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVGaXJzdEdvYWwobWF0Y2hOdW1iZXIsIGZpcnN0R29hbCkge1xuICAgICAgICBpZiAoY3VycmVudEJldCAmJiBjdXJyZW50QmV0Lm1hdGNoTnVtYmVyID09PSBtYXRjaE51bWJlcikge1xuICAgICAgICAgICAgY3VycmVudEJldC51cGRhdGVGaXJzdEdvYWwoZmlyc3RHb2FsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRCZXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVUb3BGb3JlY2FzdHMobWF0Y2hOdW1iZXIpIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7bWF0Y2hOdW1iZXJ9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEudG9wRm9yZWNhc3RzKTsgLy8g0J/QtdGA0LXQstGW0YDQutCwINC+0YLRgNC40LzQsNC90LjRhSDQtNCw0L3QuNGFXG5cbiAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19mb3JlY2FzdHMnKTtcbiAgICAgICAgICAgIGZvcmVjYXN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuXG4gICAgICAgICAgICBkYXRhLnRvcEZvcmVjYXN0cy5mb3JFYWNoKGZvcmVjYXN0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JlY2FzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJlZGljdF9fZm9yZWNhc3RzLWl0ZW0nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KGZvcmVjYXN0LnBlcmNlbnRhZ2UpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZVNwYW4udGV4dENvbnRlbnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBmb3JlY2FzdFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgICR7Zm9yZWNhc3QuZm9yZWNhc3QgPz8gXCIwLTBcIn1gKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQocGVyY2VudGFnZVNwYW4pO1xuICAgICAgICAgICAgICAgIGZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChmb3JlY2FzdFRleHQpO1xuXG4gICAgICAgICAgICAgICAgZm9yZWNhc3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0SXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdG9wIGZvcmVjYXN0czonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW5kZXJVc2VycygpIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7Y3VycmVudFRhYlRhYmxlfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCB1c2VycyA9IGRhdGEudXNlcnNcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJzKVxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2NvcmVUYWJBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1zY29yZS5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0dvYWxUYWJBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1nb2FsLmFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgaWYodXNlcnMubGVuZ3RoID49IDUwKXtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1RvcEZvcmVjYXN0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih1c2Vycy5sZW5ndGggPCA1MCl7XG4gICAgICAgICAgICAgICAgICAgIHNob3dUb3BGb3JlY2FzdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzU2NvcmVUYWJBY3RpdmUgJiYgc2hvd1RvcEZvcmVjYXN0KSB0b3BGb3JlY2FzdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgIGlmIChpc0dvYWxUYWJBY3RpdmUpIHRvcEZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG5cblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1c2VySWQpXG5cbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCwgY3VycmVudFRhYlRhYmxlKVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlcnMpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCBtYXRjaE51bWJlcikge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGlmICghdXNlcnMgfHwgIXVzZXJzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIC8vINCk0ZbQu9GM0YLRgNGD0ZTQvNC+INC60L7RgNC40YHRgtGD0LLQsNGH0ZbQsiwg0Y/QutGWINC30YDQvtCx0LjQu9C4INGB0YLQsNCy0LrRgyDQvdCwINCy0LrQsNC30LDQvdC40Lkg0LzQsNGC0YdcbiAgICAgICAgLy8gY29uc3QgdXNlcnMgPSB1c2Vycy5maWx0ZXIodXNlciA9PlxuICAgICAgICAvLyAgICAgdXNlci5iZXRzLnNvbWUoYmV0ID0+IGJldC5tYXRjaE51bWJlciA9PT0gbWF0Y2hOdW1iZXIpXG4gICAgICAgIC8vICk7XG5cbiAgICAgICAgLy8gaWYgKCF1c2Vycy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAvLyDQl9C90LDRhdC+0LTQuNC80L4g0L/QvtGC0L7Rh9C90L7Qs9C+INC60L7RgNC40YHRgtGD0LLQsNGH0LBcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuXG4gICAgICAgIC8vINCS0LjQstC+0LTQuNC80L4g0LLRgdGW0YUg0ZbQvdGI0LjRhSDQutC+0YDQuNGB0YLRg9Cy0LDRh9GW0LIg0YMgcmVzdWx0c1RhYmxlXG4gICAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlci51c2VyaWQgIT09IGN1cnJlbnRVc2VySWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCBmYWxzZSwgcmVzdWx0c1RhYmxlLCB1c2VycywgbWF0Y2hOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQktC40LLQvtC00LjQvNC+INC/0L7RgtC+0YfQvdC+0LPQviDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwINCyIHJlc3VsdHNUYWJsZU90aGVyXG4gICAgICAgIGlmIChjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgbWF0Y2hOdW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCBhbGxVc2VycywgbWF0Y2hOdW1iZXIpIHtcbiAgICAgICAgbGV0IG1hdGNoRGF0ZTtcblxuICAgICAgICBpZiAobWF0Y2hOdW1iZXIgPT09IDEpIHtcbiAgICAgICAgICAgIG1hdGNoRGF0ZSA9IEZJUlNUX01BVENIX0RBVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoTnVtYmVyID09PSAyKSB7XG4gICAgICAgICAgICBtYXRjaERhdGUgPSBTRUNPTkRfTUFUQ0hfREFURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hOdW1iZXIgPT09IDMpIHtcbiAgICAgICAgICAgIG1hdGNoRGF0ZSA9IFRISVJEX01BVENIX0RBVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoTnVtYmVyID09PSA0KSB7XG4gICAgICAgICAgICBtYXRjaERhdGUgPSBGT1VSVEhfTUFUQ0hfREFURTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgYWRkaXRpb25hbFVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkaXRpb25hbFVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7aXNDdXJyZW50VXNlciA/IHVzZXIudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyLnVzZXJpZCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICR7Y3VycmVudERhdGUgPj0gbWF0Y2hEYXRlID9cbiAgICAgICAgICAgIGA8c3Bhbj4ke3VzZXIudGVhbTEgIT09IHVuZGVmaW5lZCAmJiB1c2VyLnRlYW0xICE9PSBudWxsID8gdXNlci50ZWFtMSA6IFwiLVwifTwvc3Bhbj48aW1nIHNyYz1cImh0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ29hbHMtb3ItemVyb2VzL2ltZy92cy5wbmdcIiBhbHQ9XCJ2c1wiPjxzcGFuPiR7dXNlci50ZWFtMiAhPT0gdW5kZWZpbmVkICYmIHVzZXIudGVhbTIgIT09IG51bGwgPyB1c2VyLnRlYW0yIDogXCItXCJ9PC9zcGFuPmAgOlxuICAgICAgICAgICAgYDxzcGFuPioqPC9zcGFuPjxpbWcgc3JjPVwiaHR0cHM6Ly9mYXYtcHJvbS5jb20vaHRtbC9nb2Fscy1vci16ZXJvZXMvaW1nL3ZzLnBuZ1wiIGFsdD1cInZzXCI+PHNwYW4+Kio8L3NwYW4+YFxuICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgJHt1c2VyLndpbm5lciA9PT0gdHJ1ZSAgP1xuICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwicHJpemVcIj4qKioqKjwvZGl2PmAgOlxuICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwibm9XaW5uZXJzXCI+KioqKio8L2Rpdj5gXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICR7dXNlci5ib251c0ZpcnN0R29hbCA9PT0gdHJ1ZSAgP1xuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIiBkYXRhLXRyYW5zbGF0ZT1cInNzNTAwXCI+KioqKio8L2Rpdj5gIDpcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCJub1dpbm5lcnNcIj4qKioqKjwvZGl2PmBcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQoXCJ5b3VcIik7XG4gICAgICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+JHtpc0N1cnJlbnRVc2VyID8gdXNlci51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXIudXNlcmlkKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4ke3VzZXIudGVhbTEgIT09IHVuZGVmaW5lZCAmJiB1c2VyLnRlYW0xICE9PSBudWxsID8gdXNlci50ZWFtMSA6IFwiLVwifTwvc3Bhbj48aW1nIHNyYz1cImh0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ29hbHMtb3ItemVyb2VzL2ltZy92cy5wbmdcIiBhbHQ9XCJ2c1wiPjxzcGFuPiR7dXNlci50ZWFtMiAhPT0gdW5kZWZpbmVkICYmIHVzZXIudGVhbTIgIT09IG51bGwgPyB1c2VyLnRlYW0yIDogXCItXCJ9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3VzZXIud2lubmVyID09PSB0cnVlICA/XG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIiBkYXRhLXRyYW5zbGF0ZT1cInByaXplXCI+KioqKio8L2Rpdj5gIDpcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwibm9XaW5uZXJzXCI+KioqKio8L2Rpdj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJHt1c2VyLmJvbnVzRmlyc3RHb2FsID09PSB0cnVlICA/XG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCJzczUwMFwiPioqKioqPC9kaXY+YCA6XG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCJub1dpbm5lcnNcIj4qKioqKjwvZGl2PmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgYDtcbiAgICAgICAgICAgIGNvbnN0IHlvdUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB5b3VCbG9jay5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93LXlvdScpO1xuICAgICAgICAgICAgeW91QmxvY2suc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsICd0YWJsZVlvdScpO1xuICAgICAgICAgICAgLy8geW91QmxvY2sudGV4dENvbnRlbnQgPSBcIllvdVwiO1xuICAgICAgICAgICAgYWRkaXRpb25hbFVzZXJSb3cuaW5zZXJ0QmVmb3JlKHlvdUJsb2NrLCBhZGRpdGlvbmFsVXNlclJvdy5jaGlsZHJlblsxXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0YWJsZS5hcHBlbmQoYWRkaXRpb25hbFVzZXJSb3cpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgLy8gM0QgYW5pbVxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZWFtLCAuYW5pbUNhcmQsIC5hbmltUmlnaHRcIik7IC8vINCU0L7QsdCw0LLQu9GP0LXQvCAuYW5pbVJpZ2h0XG4gICAgbGV0IGFuZ2xlID0gMDtcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVDYXJkcygpIHtcbiAgICAgICAgYW5nbGUgKz0gMC45OyAvLyBzcGVlZFxuICAgICAgICBjb25zdCByb3RhdGVYID0gTWF0aC5zaW4oYW5nbGUgKiAoTWF0aC5QSSAvIDE4MCkpICogMTA7IC8vINCa0L7Qu9C10LHQsNC90LjQtSDQv9C+IFhcbiAgICAgICAgY29uc3Qgcm90YXRlWSA9IE1hdGguY29zKGFuZ2xlICogKE1hdGguUEkgLyAxODApKSAqIDEwOyAvLyDQmtC+0LvQtdCx0LDQvdC40LUg0L/QviBZXG5cbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucyhcImFuaW1SaWdodFwiKSkge1xuICAgICAgICAgICAgICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHstcm90YXRlWX1kZWcpIHJvdGF0ZVgoJHstcm90YXRlWH1kZWcpYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgke3JvdGF0ZVl9ZGVnKSByb3RhdGVYKCR7cm90YXRlWH1kZWcpYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVDYXJkcyk7XG4gICAgfVxuICAgIGFuaW1hdGVDYXJkcygpO1xuXG4gICAgLy8gcHJlZGljdCB0YWJzXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X190YWJzLWdsb2JhbCA+IGRpdiwgLnByZWRpY3RfX3RhYnMtZGF0ZXMgPiBkaXYnKTtcbiAgICBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX2NvbnRhaW5lcicpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlVGFiQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgbGV0IG1hdGNoRGF0ZTtcblxuICAgICAgICBjb25zdCBjbGlja2VkVGFiID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucHJlZGljdF9fdGFicy1kYXRlXCIpIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnByZWRpY3RfX3RhYnMtZ29hbFwiKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdChcIi5wcmVkaWN0X190YWJzLXNjb3JlXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjbGlja2VkVGFiKVxuICAgICAgICBjb25zdCB0YWJQYWlyID0gY2xpY2tlZFRhYi5jbG9zZXN0KCcucHJlZGljdF9fdGFicy1nbG9iYWwnKSB8fCBjbGlja2VkVGFiLmNsb3Nlc3QoJy5wcmVkaWN0X190YWJzLWRhdGVzJyk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRNYXRjaCA9IE51bWJlcihjbGlja2VkVGFiLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0Y2gtbnVtYmVyXCIpKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNsaWNrZWRUYWIpXG5cbiAgICAgICAgaWYoY3VycmVudE1hdGNoID09PSAxKXtcbiAgICAgICAgICAgIG1hdGNoRGF0ZSA9IEZJUlNUX01BVENIX0RBVEVcbiAgICAgICAgfVxuICAgICAgICBpZihjdXJyZW50TWF0Y2ggPT09IDIpe1xuICAgICAgICAgICAgbWF0Y2hEYXRlID0gU0VDT05EX01BVENIX0RBVEVcbiAgICAgICAgfVxuICAgICAgICBpZihjdXJyZW50TWF0Y2ggPT09IDMpe1xuICAgICAgICAgICAgbWF0Y2hEYXRlID0gVEhJUkRfTUFUQ0hfREFURVxuICAgICAgICB9XG4gICAgICAgIGlmKGN1cnJlbnRNYXRjaCA9PT0gNCl7XG4gICAgICAgICAgICBtYXRjaERhdGUgPSBGT1VSVEhfTUFUQ0hfREFURVxuICAgICAgICB9XG4gICAgICAgIGlmKGN1cnJlbnREYXRlID4gbWF0Y2hEYXRlKXtcbiAgICAgICAgICAgIHBsYWNlQmV0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHBsYWNlQmV0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoY2xpY2tlZFRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIGlmICh0YWJQYWlyKSB7XG4gICAgICAgICAgICBjb25zdCBwYWlyID0gdGFiUGFpci5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAocGFpci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFpclswXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWNrZWRUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHVwZGF0ZUNvbnRhaW5lcnMoKTtcbiAgICAgICAgLy8gcmVmcmVzaEJldEluZm8odXNlcklkKVxuICAgICAgICBpZihjbGlja2VkVGFiLmNsb3Nlc3QoJy5wcmVkaWN0X190YWJzLWRhdGVzJykpe1xuICAgICAgICAgICAgdXBkYXRlVG9wRm9yZWNhc3RzKGN1cnJlbnRNYXRjaClcbiAgICAgICAgICAgIGN1cnJlbnRCZXQgPSBuZXcgQmV0KHVzZXJJZCwgY3VycmVudE1hdGNoKVxuICAgICAgICAgICAgbWF0Y2hOdW1iZXIgPSBOdW1iZXIoY2xpY2tlZFRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hdGNoLW51bWJlclwiKSlcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZGljdF9fdGVhbS1udW1iZXJcIikuZm9yRWFjaCgoc2NvcmUsIGkpID0+e1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoRGF0ZSwgbWF0Y2hOdW1iZXIpXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudERhdGUgPiBtYXRjaERhdGUgJiYgaSA9PT0gMSAmJiBtYXRjaE51bWJlciA9PT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlLnRleHRDb250ZW50ID0gXCIwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihjdXJyZW50RGF0ZSA+IG1hdGNoRGF0ZSAmJiBpID09PSAwICYmIG1hdGNoTnVtYmVyID09PSAxKXtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUudGV4dENvbnRlbnQgPSBcIjBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBlbHNle1xuICAgICAgICAgICAgICAgIC8vICAgICBzY29yZS50ZXh0Q29udGVudCA9IFwiMFwiXG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKEZJUlNUX01BVENIX0RBVEUsIDEpOyAvLyDQlNC70Y8g0L/QtdGA0YjQvtCz0L4g0LzQsNGC0YfRg1xuICAgICAgICBsb2NrTWF0Y2hDb250YWluZXIoU0VDT05EX01BVENIX0RBVEUsIDIpOyAvLyDQlNC70Y8g0LTRgNGD0LPQvtCz0L4g0LzQsNGC0YfRg1xuICAgICAgICBsb2NrTWF0Y2hDb250YWluZXIoVEhJUkRfTUFUQ0hfREFURSwgMyk7IC8vINCU0LvRjyDRgtGA0LXRgtGM0L7Qs9C+INC80LDRgtGH0YNcbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKEZPVVJUSF9NQVRDSF9EQVRFLCA0KTsgLy8g0JTQu9GPINGH0LXRgtCy0LXRgNGC0L7Qs9C+INC80LDRgtGH0YNcbiAgICB9XG5cbiAgICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVRhYkNsaWNrKSk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb250YWluZXJzKCkge1xuICAgICAgICBjb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG5cbiAgICAgICAgY29uc3QgaXNTY29yZVRhYkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLXNjb3JlLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBpc0dvYWxUYWJBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1nb2FsLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBpc0RhdGUxQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3RhYnMtZGF0ZS5kYXRlMS5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgaXNEYXRlMkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLWRhdGUuZGF0ZTIuYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGlzRGF0ZTNBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1kYXRlLmRhdGUzLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBpc0RhdGU0QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3RhYnMtZGF0ZS5kYXRlNC5hY3RpdmUnKTtcblxuXG4gICAgICAgIGlmIChpc1Njb3JlVGFiQWN0aXZlKSB7XG4gICAgICAgICAgICBpZihzaG93VG9wRm9yZWNhc3QpIHRvcEZvcmVjYXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG5cbiAgICAgICAgICAgIGlmIChpc0RhdGUxQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRhaW5lci5zY29yZS0xJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZTJBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGFpbmVyLnNjb3JlLTInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlM0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250YWluZXIuc2NvcmUtMycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0RhdGU0QWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRhaW5lci5zY29yZS00JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNHb2FsVGFiQWN0aXZlKSB7XG4gICAgICAgICAgICBpZihzaG93VG9wRm9yZWNhc3QpIHRvcEZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICBpZiAoaXNEYXRlMUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250YWluZXIuZ29hbC0xJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZTJBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGFpbmVyLmdvYWwtMicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0RhdGUzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRhaW5lci5nb2FsLTMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlNEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250YWluZXIuZ29hbC00JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3Njb3JlXG5cbiAgICBmdW5jdGlvbiBzY29yZUluaXQoYnRuKXtcbiAgICAgICAgY29uc3QgdGVhbUNvbnRyb2wgPSBidG4uY2xvc2VzdCgnLnByZWRpY3RfX3RlYW0tY29udHJvbCcpO1xuICAgICAgICBjb25zdCB0ZWFtTnVtYmVyID0gdGVhbUNvbnRyb2wucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3RlYW0tbnVtYmVyJylcbiAgICAgICAgY29uc3QgbWF0Y2hDb250YWluZXIgPSBidG4uY2xvc2VzdCgnLnByZWRpY3RfX2NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBtYXRjaE51bWJlciA9IHBhcnNlSW50KG1hdGNoQ29udGFpbmVyLmRhdGFzZXQubWF0Y2hOdW1iZXIpO1xuXG4gICAgICAgIGNvbnN0IGdldEdvYWxzID0gKHRlYW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtYXRjaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS10ZWFtPVwiJHt0ZWFtfVwiXSAucHJlZGljdF9fdGVhbS1udW1iZXJgKTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50ID8gTnVtYmVyKGVsZW1lbnQudGV4dENvbnRlbnQpIHx8IDAgOiAwO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgY29uc3QgdGVhbTFHb2FscyA9IGdldEdvYWxzKCd0ZWFtMScpIDtcbiAgICAgICAgY29uc3QgdGVhbTJHb2FscyA9IGdldEdvYWxzKCd0ZWFtMicpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRlYW0xR29hbHMsIHRlYW0yR29hbHMpXG5cbiAgICAgICAgdXBkYXRlU2NvcmUobWF0Y2hOdW1iZXIsIHRlYW0xR29hbHMsIHRlYW0yR29hbHMpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X190ZWFtLWluY3JlYXNlLCAucHJlZGljdF9fdGVhbS1kZWNyZWFzZScpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IHRlYW1Db250cm9sID0gYnRuLmNsb3Nlc3QoJy5wcmVkaWN0X190ZWFtLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1OdW1iZXIgPSB0ZWFtQ29udHJvbC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGVhbS1udW1iZXInKVxuICAgICAgICAgICAgY29uc3QgbWF0Y2hDb250YWluZXIgPSBidG4uY2xvc2VzdCgnLnByZWRpY3RfX2NvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludCh0ZWFtTnVtYmVyLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmVkaWN0X190ZWFtLWluY3JlYXNlJykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVhbU51bWJlci50ZXh0Q29udGVudCA9IGAke3ZhbHVlfWA7XG4gICAgICAgICAgICBzY29yZUluaXQoYnRuKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYmV0KVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgLy90YWJsZSB0YWJzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190YWJzLWRhdGUnKS5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1kYXRlJykuZm9yRWFjaCh0YWIgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjdXJyZW50VGFiVGFibGUgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fdGFicy1kYXRlLmFjdGl2ZVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hdGNoLW51bWJlclwiKSlcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuXG4gICAgLy9wb3B1cHNcblxuICAgIGZ1bmN0aW9uIHNldFBvcHVwcyh0cmlnZ2VyQnV0dG9ucywgcG9wdXBDbGFzcykge1xuICAgICAgICBjb25zdCBwb3B1cHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJyk7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwc19faXRlbS4ke3BvcHVwQ2xhc3N9YCk7XG4gICAgICAgIGNvbnN0IHBvcHVwQnRuID0gcG9wdXBzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBzX19pdGVtLWJ0blwiKVxuXG5cbiAgICAgICAgaWYgKCF0cmlnZ2VyQnV0dG9ucyB8fCAhcG9wdXAgfHwgIXBvcHVwc0NvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgIHRyaWdnZXJCdXR0b25zLmZvckVhY2godHJpZ2dlckJ1dHRvbiA9PiB7XG4gICAgICAgICAgICB0cmlnZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdfb3BhY2l0eScpO1xuICAgICAgICAgICAgICAgIHBvcHVwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHBvcHVwQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHNfX2l0ZW0tY2xvc2UnKTtcbiAgICAgICAgY29uc3QgYnRuQ2xvc2UgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsb3NlJyk7XG5cbiAgICAgICAgcG9wdXBzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cHNDb250YWluZXIgfHwgZS50YXJnZXQgPT09IGNsb3NlQnV0dG9uIHx8IGUudGFyZ2V0ID09PSBidG5DbG9zZSkge1xuICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xvc2VQb3B1cCgpIHtcbiAgICAgICAgICAgIHBvcHVwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdfb3BhY2l0eScpO1xuICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUocG9wdXBDbGFzcyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2cocG9wdXBCdG4pXG4gICAgICAgIHBvcHVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBjbG9zZVBvcHVwKClcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHNldFBvcHVwcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2lkZV9fbGlzdC1idG4nKSwgJ2dpZGVQb3B1cCcpO1xuICAgIHNldFBvcHVwcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fYnRuLnRvb2stcGFydCcpLCAnX2NvbmZpcm1Qb3B1cCcpO1xuXG4gICAgLy9nbyB0byBwcmVkaWN0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b1ByZWRpY3RcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWRpY3RcIik7XG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSAyO1xuXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHRhcmdldFBvc2l0aW9uLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJhZGlvQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X19yYWRpbycpO1xuXG4gICAgcmFkaW9Db250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW9JbnB1dHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX3JhZGlvLWl0ZW0nKTtcblxuICAgICAgICByYWRpb0lucHV0cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmFkaW9JbnB1dHMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZSlcblxuICAgICAgICAgICAgICAgIHVwZGF0ZUZpcnN0R29hbChtYXRjaE51bWJlciwgdGhpcy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgbG9hZFRyYW5zbGF0aW9ucygpXG4gICAgICAgIC50aGVuKGluaXQpXG5cbiAgICBpbml0KClcblxuICAgIC8vIFRFU1RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjE4OTA4NDY1XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWxhc3RQcmVkJykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X19sYXN0JykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNldFBvcHVwcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXRoZW5rcycpLCAnX2NvbmZpcm1Qb3B1cCcpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1wcmVkaWN0JykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5jb25maXJtZWQnKS5mb3JFYWNoKHVuY29uZmlybWVkID0+IHtcbiAgICAgICAgICAgICAgICB1bmNvbmZpcm1lZC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uZmlybWVkJykuZm9yRWFjaChjb25maXJtZWQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbmZpcm1lZC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1hZnRlclwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgRklSU1RfTUFUQ0hfREFURSA9IG5ldyBEYXRlKCcyMDIyLTAzLTIwVDIxOjE1OjAwJylcbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKEZJUlNUX01BVENIX0RBVEUsIDEpO1xuICAgICAgICBwbGFjZUJldEJ0bi5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIilcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2NrIHRhYmxlXCIpXG4gICAgfSk7XG5cbiAgICB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpID8/IG51bGxcblxuICAgIHVwZGF0ZVRvcEZvcmVjYXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZVRvcEZvcmVjYXN0cyDQstC40LzQutC90LXQvdC+INC00LvRjyDRgtC10YHRgtGDJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyVXNlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJVc2VycyDQstC40LzQutC90LXQvdC+INC00LvRjyDRgtC10YHRgtGDJyk7XG4gICAgICAgIC8vIHNob3dUb3BGb3JlY2FzdCA9IHRydWVcbiAgICB9XG5cbiAgICBwb3B1bGF0ZVVzZXJzVGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3B1bGF0ZVVzZXJzVGFibGUg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgIH1cblxuICAgIGRpc3BsYXlVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZGlzcGxheVVzZXIg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgIH1cbiAgICBzaG93VG9wRm9yZWNhc3QgPSB0cnVlXG4gICAgY29uc29sZS5sb2coc2hvd1RvcEZvcmVjYXN0KVxufSkoKVxuIl19
