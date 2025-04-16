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
  var apiURL = 'https://fav-prom.com/api_predictor_football_ro2',
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
  var FIRST_MATCH_DATE = new Date('2025-04-20T21:15:00'); // дата матчу - 30хв
  var SECOND_MATCH_DATE = new Date('2025-04-23T21:15:00');
  var THIRD_MATCH_DATE = new Date('2025-04-23T21:15:00');
  var FOURTH_MATCH_DATE = new Date('2025-04-23T21:15:00');
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
  var locale = (_sessionStorage$getIt = sessionStorage.getItem("locale")) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "uk";
  // let locale = "uk"

  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var i18nData = {};
  var userId;
  // userId = 100300268;

  var currentBet;
  if (ukLeng) locale = 'uk';
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
      if (showTopForecast) {
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
      }
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
  };
  populateUsersTable = function populateUsersTable() {
    console.log('populateUsersTable вимкнено для тесту');
  };
  displayUser = function displayUser() {
    console.log('displayUser вимкнено для тесту');
  };
  showTopForecast = true;
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiX3Nlc3Npb25TdG9yYWdlJGdldEl0IiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsIl9zZXNzaW9uU3RvcmFnZSRnZXRJdDIiLCJhcGlVUkwiLCJ1bmF1dGhNc2dzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwieW91QXJlSW5CdG5zIiwibWFpblBhZ2UiLCJxdWVyeVNlbGVjdG9yIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJwbGFjZUJldEJ0biIsImxhc3RQcmVkaWN0IiwidG9wRm9yZWNhc3QiLCJjdXJyZW50VGFiIiwiTnVtYmVyIiwiZ2V0QXR0cmlidXRlIiwiY3VycmVudFRhYlRhYmxlIiwibWF0Y2hOdW1iZXIiLCJzaG93VG9wRm9yZWNhc3QiLCJGSVJTVF9NQVRDSF9EQVRFIiwiRGF0ZSIsIlNFQ09ORF9NQVRDSF9EQVRFIiwiVEhJUkRfTUFUQ0hfREFURSIsIkZPVVJUSF9NQVRDSF9EQVRFIiwiY3VycmVudERhdGUiLCJsb2NrTWF0Y2hDb250YWluZXIiLCJtYXRjaERhdGUiLCJjb250YWluZXJzIiwiY29uY2F0IiwidGFiIiwiZm9yRWFjaCIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsInNldEludGVydmFsIiwiQmV0IiwidXNlcklkIiwidGVhbTFHb2FscyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInRlYW0yR29hbHMiLCJmaXJzdEdvYWwiLCJfY2xhc3NDYWxsQ2hlY2siLCJ1c2VyaWQiLCJ0ZWFtMSIsInRlYW0yIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJ1cGRhdGVHb2FscyIsImdvYWxzVXBkYXRlZCIsInVwZGF0ZUZpcnN0R29hbCIsImZpcnN0R29hbFVwZGF0ZWQiLCJjYWNoZSIsInByZWRpY3REYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJkZWJ1ZyIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInVrTGVuZyIsImVuTGVuZyIsImkxOG5EYXRhIiwiY3VycmVudEJldCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJfb2JqZWN0U3ByZWFkIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0TGFzdEJldCIsImJldHMiLCJmaW5kIiwiYmV0IiwicmVmcmVzaEJldEluZm8iLCJzY29yZTEiLCJzY29yZTIiLCJzY29yZTMiLCJzY29yZTQiLCJnb2FsMSIsImdvYWwyIiwiZ29hbDMiLCJnb2FsNCIsIm1ldGhvZCIsImRhdGEiLCJiZXRBdmFpbGFibGUiLCJzb21lIiwibGFzdFRlYW0xIiwibGFzdFRlYW0yIiwic2NvcmVUZWFtMSIsInNjb3JlVGVhbTIiLCJyZW1vdmUiLCJsYXN0QmV0IiwidGV4dENvbnRlbnQiLCJiZXRDb25maXJtZWQiLCJpdGVtIiwic2V0QXR0cmlidXRlIiwidHJhbnNsYXRlIiwiY29udGFpbnMiLCJlcnJvciIsImNvbnNvbGUiLCJJbml0UGFnZSIsImNoZWNrVXNlckF1dGgiLCJyZW5kZXJVc2VycyIsInVwZGF0ZVRvcEZvcmVjYXN0cyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJ5b3VBcmVJbkJ0biIsImVyciIsImUiLCJmIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInVuYXV0aE1lcyIsInBsYWNlQmV0IiwiYnRuIiwic2NvcmVJbml0IiwiYWN0aXZlVGFicyIsInJlcSIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJhY3RpdmVJbnB1dCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZFRyYW5zbGF0aW9ucyIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImVsZW1zIiwiZWxlbSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsImxvZyIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJfaSIsIl9hcnIiLCJsYW5nIiwiaW5pdCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImMiLCJpIiwiZ191c2VyX2lkIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVNjb3JlIiwiZm9yZWNhc3RzQ29udGFpbmVyIiwidG9wRm9yZWNhc3RzIiwiZm9yZWNhc3QiLCJfZm9yZWNhc3QkZm9yZWNhc3QiLCJmb3JlY2FzdEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwicGVyY2VudGFnZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwicGVyY2VudGFnZVNwYW4iLCJmb3JlY2FzdFRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwidXNlcnMiLCJpc1Njb3JlVGFiQWN0aXZlIiwiaXNHb2FsVGFiQWN0aXZlIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsImN1cnJlbnRVc2VyIiwidXNlciIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwiYWxsVXNlcnMiLCJhZGRpdGlvbmFsVXNlclJvdyIsIm1hc2tVc2VySWQiLCJ3aW5uZXIiLCJib251c0ZpcnN0R29hbCIsInlvdUJsb2NrIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJhcHBlbmQiLCJ0b1N0cmluZyIsInNsaWNlIiwiY2FyZHMiLCJhbmdsZSIsImFuaW1hdGVDYXJkcyIsInJvdGF0ZVgiLCJNYXRoIiwic2luIiwiUEkiLCJyb3RhdGVZIiwiY29zIiwiY2FyZCIsInN0eWxlIiwidHJhbnNmb3JtIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGFicyIsImhhbmRsZVRhYkNsaWNrIiwiZXZlbnQiLCJjbGlja2VkVGFiIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRhYlBhaXIiLCJjdXJyZW50TWF0Y2giLCJwYWlyIiwidXBkYXRlQ29udGFpbmVycyIsInNjb3JlIiwiYnV0dG9uIiwiY2hlY2tlZCIsImlzRGF0ZTFBY3RpdmUiLCJpc0RhdGUyQWN0aXZlIiwiaXNEYXRlM0FjdGl2ZSIsImlzRGF0ZTRBY3RpdmUiLCJ0ZWFtQ29udHJvbCIsInRlYW1OdW1iZXIiLCJtYXRjaENvbnRhaW5lciIsInBhcnNlSW50IiwiZGF0YXNldCIsImdldEdvYWxzIiwidGVhbSIsInNldFBvcHVwcyIsInRyaWdnZXJCdXR0b25zIiwicG9wdXBDbGFzcyIsInBvcHVwc0NvbnRhaW5lciIsInBvcHVwIiwicG9wdXBCdG4iLCJ0cmlnZ2VyQnV0dG9uIiwib3ZlcmZsb3ciLCJjbG9zZUJ1dHRvbiIsImJ0bkNsb3NlIiwiY2xvc2VQb3B1cCIsInRhcmdldEVsZW1lbnQiLCJ0YXJnZXRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInJhZGlvQ29udGFpbmVycyIsInJhZGlvSW5wdXRzIiwicmFkaW8iLCJ0b2dnbGUiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwiYXV0aEJ0biIsInVuY29uZmlybWVkIiwiY29uZmlybWVkIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFVBQUFBLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLHNCQUFBLEVBQVk7RUFDVCxJQUFNQyxNQUFNLEdBQUcsaURBQWlEO0lBQzVEQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3JEQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0lBQ3RERSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM5Q0Ms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QUFDLHVDQUF1QyxDQUFDO0VBQ3hELENBQUM7RUFFRHlDLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQWU7SUFDdEJsRixPQUFPLENBQUN5QyxHQUFHLENBQUMsZ0NBQWdDLENBQUM7RUFDakQsQ0FBQztFQUNEL0gsZUFBZSxHQUFHLElBQUk7QUFDMUIsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9wcmVkaWN0b3JfZm9vdGJhbGxfcm8yJyxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHlvdUFyZUluQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29rLXBhcnQnKSxcbiAgICAgICAgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cy10YWJsZScpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzLXRhYmxlLW90aGVyJyksXG4gICAgICAgIHBsYWNlQmV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0LWJ0blwiKSxcbiAgICAgICAgbGFzdFByZWRpY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3RcIiksXG4gICAgICAgIHRvcEZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BGb3JlY2FzdFwiKVxuXG4gICAgbGV0IGN1cnJlbnRUYWIgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X190YWJzLWRhdGUuYWN0aXZlXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0Y2gtbnVtYmVyXCIpKVxuICAgIGxldCBjdXJyZW50VGFiVGFibGUgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fdGFicy1kYXRlLmFjdGl2ZVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hdGNoLW51bWJlclwiKSlcbiAgICBsZXQgbWF0Y2hOdW1iZXIgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19jb250YWluZXIuYWN0aXZlXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0Y2gtbnVtYmVyXCIpKVxuICAgIGxldCBzaG93VG9wRm9yZWNhc3QgPSBmYWxzZVxuXG4gICAgY29uc3QgRklSU1RfTUFUQ0hfREFURSA9IG5ldyBEYXRlKCcyMDI1LTA0LTIwVDIxOjE1OjAwJykgLy8g0LTQsNGC0LAg0LzQsNGC0YfRgyAtIDMw0YXQslxuICAgIGNvbnN0IFNFQ09ORF9NQVRDSF9EQVRFID0gbmV3IERhdGUoJzIwMjUtMDQtMjNUMjE6MTU6MDAnKVxuICAgIGNvbnN0IFRISVJEX01BVENIX0RBVEUgPSBuZXcgRGF0ZSgnMjAyNS0wNC0yM1QyMToxNTowMCcpXG4gICAgY29uc3QgRk9VUlRIX01BVENIX0RBVEUgPSBuZXcgRGF0ZSgnMjAyNS0wNC0yM1QyMToxNTowMCcpXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXG5cbiAgICBmdW5jdGlvbiBsb2NrTWF0Y2hDb250YWluZXIobWF0Y2hEYXRlLCBtYXRjaE51bWJlcikge1xuICAgICAgICBpZiAobmV3IERhdGUoKSA+IG1hdGNoRGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wcmVkaWN0X19jb250YWluZXJbZGF0YS1tYXRjaC1udW1iZXI9XCIke21hdGNoTnVtYmVyfVwiXWApO1xuICAgICAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByZWRpY3RfX3RhYnMtZGF0ZS5hY3RpdmVbZGF0YS1tYXRjaC1udW1iZXI9XCIke21hdGNoTnVtYmVyfVwiXWApO1xuXG4gICAgICAgICAgICBjb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZih0YWIpe1xuICAgICAgICAgICAgICAgIHBsYWNlQmV0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9ja01hdGNoQ29udGFpbmVyKEZJUlNUX01BVENIX0RBVEUsIDEpOyAvLyDQlNC70Y8g0L/QtdGA0YjQvtCz0L4g0LzQsNGC0YfRg1xuICAgIGxvY2tNYXRjaENvbnRhaW5lcihTRUNPTkRfTUFUQ0hfREFURSwgMik7IC8vINCU0LvRjyDQtNGA0YPQs9C+0LPQviDQvNCw0YLRh9GDXG4gICAgbG9ja01hdGNoQ29udGFpbmVyKFRISVJEX01BVENIX0RBVEUsIDMpOyAvLyDQlNC70Y8g0YLRgNC10YLRjNC+0LPQviDQvNCw0YLRh9GDXG4gICAgbG9ja01hdGNoQ29udGFpbmVyKEZPVVJUSF9NQVRDSF9EQVRFLCA0KTsgLy8g0JTQu9GPINGH0LXRgtCy0LXRgNGC0L7Qs9C+INC80LDRgtGH0YNcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpOyAvLyDQntC90L7QstC40YLQuCDQv9C+0YLQvtGH0L3RgyDQtNCw0YLRg1xuICAgICAgICBsb2NrTWF0Y2hDb250YWluZXIoRklSU1RfTUFUQ0hfREFURSwgMSk7XG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihTRUNPTkRfTUFUQ0hfREFURSwgMik7XG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihUSElSRF9NQVRDSF9EQVRFLCAzKTtcbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKEZPVVJUSF9NQVRDSF9EQVRFLCA0KTtcbiAgICB9LCA2MDAwMDApOyAvLyDQntC90L7QstC70Y7QstCw0YLQuCDQutC+0LbQvdGWIDEwINGF0LJcblxuICAgIGNsYXNzIEJldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHVzZXJJZCwgbWF0Y2hOdW1iZXIsIHRlYW0xR29hbHMgPSAwLCB0ZWFtMkdvYWxzID0gMCwgZmlyc3RHb2FsKSB7XG4gICAgICAgICAgICBpZih1c2VySWQgIT09IG51bGwpIHRoaXMudXNlcmlkID0gdXNlcklkO1xuICAgICAgICAgICAgdGhpcy5tYXRjaE51bWJlciA9IG1hdGNoTnVtYmVyO1xuICAgICAgICAgICAgdGhpcy50ZWFtMSA9IHRlYW0xR29hbHM7XG4gICAgICAgICAgICB0aGlzLnRlYW0yID0gdGVhbTJHb2FscztcbiAgICAgICAgICAgIGlmKGZpcnN0R29hbCAhPT0gdW5kZWZpbmVkKSB0aGlzLmZpcnN0R29hbCA9IGZpcnN0R29hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUdvYWxzKHRlYW0xR29hbHMsIHRlYW0yR29hbHMpIHtcbiAgICAgICAgICAgIGlmICh0ZWFtMUdvYWxzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlYW0xID0gdGVhbTFHb2FscyAhPT0gbnVsbCA/IHRlYW0xR29hbHMgOiB0aGlzLnRlYW0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRlYW0yR29hbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVhbTIgPSB0ZWFtMkdvYWxzICE9PSBudWxsID8gdGVhbTJHb2FscyA6IHRoaXMudGVhbTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdvYWxzVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVGaXJzdEdvYWwoZmlyc3RHb2FsKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3RHb2FsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0R29hbCA9IGZpcnN0R29hbCAhPT0gbnVsbCA/IGZpcnN0R29hbCA6IHRoaXMuZmlyc3RHb2FsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5maXJzdEdvYWxVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhY2hlID0ge307XG4gICAgbGV0IHByZWRpY3REYXRhID0gW107XG5cbiAgICBsZXQgdHJhbnNsYXRlU3RhdGUgPSB0cnVlXG4gICAgbGV0IGRlYnVnID0gZmFsc2VcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8/IFwidWtcIlxuICAgIC8vIGxldCBsb2NhbGUgPSBcInVrXCJcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuXG4gICAgbGV0IHVzZXJJZDtcbiAgICAvLyB1c2VySWQgPSAxMDAzMDAyNjg7XG5cbiAgICBsZXQgY3VycmVudEJldDtcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMYXN0QmV0ID0gKGJldHMsIG1hdGNoTnVtYmVyKSA9PntcbiAgICAgICAgaWYoIWJldHMpIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gYmV0cy5maW5kKGJldCA9PiBiZXQubWF0Y2hOdW1iZXIgPT09IG1hdGNoTnVtYmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoQmV0SW5mbyh1c2VySWQpIHtcbiAgICAgICAgY29uc3Qgc2NvcmUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZS0xXCIpXG4gICAgICAgIGNvbnN0IHNjb3JlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUtMlwiKVxuICAgICAgICBjb25zdCBzY29yZTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlLTNcIilcbiAgICAgICAgY29uc3Qgc2NvcmU0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZS00XCIpXG4gICAgICAgIGNvbnN0IGdvYWwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsLTFcIilcbiAgICAgICAgY29uc3QgZ29hbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWwtMlwiKVxuICAgICAgICBjb25zdCBnb2FsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbC0zXCIpXG4gICAgICAgIGNvbnN0IGdvYWw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsLTRcIilcbiAgICAgICAgY29uc3QgbWF0Y2hOdW1iZXIgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X190YWJzLWRhdGUuYWN0aXZlXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtbWF0Y2gtbnVtYmVyXCIpKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaE51bWJlcilcblxuICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZihkYXRhLmJldHMpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGJldEF2YWlsYWJsZSA9IGRhdGEuYmV0cy5zb21lKGJldCA9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJldC5tYXRjaE51bWJlciA9PT0gbWF0Y2hOdW1iZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJldEF2YWlsYWJsZSlcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0VGVhbTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3QtdGVhbS50ZWFtMVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0VGVhbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3QtdGVhbS50ZWFtMlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY29yZVRlYW0xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZVRlYW0xXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjb3JlVGVhbTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlVGVhbTJcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlyc3RHb2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sYXN0LWNvdW50cnlcIik7XG4gICAgICAgICAgICAgICAgaWYoYmV0QXZhaWxhYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFByZWRpY3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEJldCA9IGdldExhc3RCZXQoZGF0YS5iZXRzLCBtYXRjaE51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlVGVhbTEudGV4dENvbnRlbnQgPSBsYXN0QmV0LnRlYW0xID09PSB1bmRlZmluZWQgPyBcIi1cIiA6YCR7bGFzdEJldC50ZWFtMX1gO1xuICAgICAgICAgICAgICAgICAgICBzY29yZVRlYW0yLnRleHRDb250ZW50ID0gbGFzdEJldC50ZWFtMiA9PT0gdW5kZWZpbmVkID8gXCItXCIgOmAke2xhc3RCZXQudGVhbTJ9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobGFzdEJldClcblxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJldC5iZXRDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZGljdF9fbGFzdC1yZXN1bHQudW5jb25maXJtZWRcIikuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZWRpY3RfX2xhc3QtcmVzdWx0LmNvbmZpcm1lZFwiKS5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJlZGljdF9fbGFzdC1yZXN1bHQudW5jb25maXJtZWRcIikuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZWRpY3RfX2xhc3QtcmVzdWx0LmNvbmZpcm1lZFwiKS5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QmV0Lm1hdGNoTnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTEuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJ1a3JhaW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRlYW0yLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwiYmVsZ2l1bVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QmV0Lm1hdGNoTnVtYmVyID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTIuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJ1a3JhaW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRlYW0xLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwiYmVsZ2l1bVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RCZXQubWF0Y2hOdW1iZXIgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUZWFtMi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcInVrcmFpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGVhbTEuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJiZWxnaXVtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEJldC5tYXRjaE51bWJlciA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRlYW0yLnNldEF0dHJpYnV0ZShcImRhdGEtdHJhbnNsYXRlXCIsIFwidWtyYWluZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUZWFtMS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcImJlbGdpdW1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHNjb3JlMS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgfHwgc2NvcmUyLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX2xhc3Qtc2NvcmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGFzdC1nb2FsXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihnb2FsMS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgfHwgZ29hbDIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fbGFzdC1zY29yZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sYXN0LWdvYWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGxhc3RCZXQuZmlyc3RHb2FsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxhc3RCZXQuZmlyc3RHb2FsID09PSBcInVhXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0R29hbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRyYW5zbGF0ZVwiLCBcInVrcmFpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsYXN0QmV0LmZpcnN0R29hbCA9PT0gXCJiZVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEdvYWwuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJiZWxnaXVtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGFzdEJldC5maXJzdEdvYWwgPT09IFwiZHJhd1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEdvYWwuc2V0QXR0cmlidXRlKFwiZGF0YS10cmFuc2xhdGVcIiwgXCJkcmF3XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ29hbDEuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpIHx8IGdvYWwyLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19sYXN0XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZighYmV0QXZhaWxhYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFByZWRpY3QuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsYXN0UHJlZGljdC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBJbml0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICByZW5kZXJVc2VycygpO1xuICAgICAgICB1cGRhdGVUb3BGb3JlY2FzdHMoY3VycmVudFRhYilcbiAgICAgICAgcmVmcmVzaEJldEluZm8odXNlcklkKVxuICAgIH1cblxuICAgIGxldCBjaGVja1VzZXJBdXRoID0gKCkgPT4ge1xuICAgICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgICAgICB5b3VBcmVJbkJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIHVuYXV0aE1zZ3MuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHlvdUFyZUluQnRuIG9mIHlvdUFyZUluQnRucykge1xuICAgICAgICAgICAgICAgIHlvdUFyZUluQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5hdXRoTWVzIG9mIHVuYXV0aE1zZ3MpIHtcbiAgICAgICAgICAgICAgICB1bmF1dGhNZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYWNlQmV0KGJldCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0X19jb250YWluZXIuYWN0aXZlXCIpXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX3RlYW0taW5jcmVhc2UsIC5wcmVkaWN0X190ZWFtLWRlY3JlYXNlJylcbiAgICAgICAgICAgIC5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgc2NvcmVJbml0KGJ0bik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhY3RpdmVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nb2FsQ29udFwiKVxuICAgICAgICAvLyBjb25zdCBhY3RpdmVJbnB1dCA9IGFjdGl2ZVRhYi5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RfX3JhZGlvLWl0ZW0gaW5wdXRcIilcblxuXG5cbiAgICAgICAgbGV0IHJlcSA9IHtcbiAgICAgICAgICAgIG1hdGNoTnVtYmVyOiBiZXQubWF0Y2hOdW1iZXIsXG4gICAgICAgICAgICB1c2VyaWQ6IGJldC51c2VyaWQsXG4gICAgICAgIH07XG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVUYWJzKVxuICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiBhY3RpdmVUYWJzKSB7XG4gICAgICAgICAgICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlucHV0ID0gdGFiLnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdF9fcmFkaW8taXRlbS5fYWN0aXZlIGlucHV0XCIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhYilcblxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVJbnB1dClcbiAgICAgICAgICAgICAgICAgICAgcmVxLmZpcnN0R29hbCA9IGFjdGl2ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgaWYgKGJldC5maXJzdEdvYWxVcGRhdGVkKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhiZXQuZmlyc3RHb2FsKVxuICAgICAgICAgICAgcmVxLmZpcnN0R29hbCA9IGJldC5maXJzdEdvYWw7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZXQuZ29hbHNVcGRhdGVkKSB7XG4gICAgICAgICAgICByZXEudGVhbTEgPSBiZXQudGVhbTE7XG4gICAgICAgICAgICByZXEudGVhbTIgPSBiZXQudGVhbTI7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aXZlSW5wdXQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVUYWIpXG5cbiAgICAgICAgcmVxdWVzdCgnL2JldCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQmV0IHBsYWNlZDonLCByZXMpO1xuICAgICAgICAgICAgICAgIEluaXRQYWdlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBsYWNpbmcgYmV0OicsIGVycm9yKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb2Fscy1vci16ZXJvcycpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmshXCIpXG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgLy8gY3VycmVudEJldCA9IG5ldyBCZXQodXNlcklkLCBtYXRjaE51bWJlcilcbiAgICAgICAgICAgIEluaXRQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBJbml0UGFnZSgpO1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgdmFyIGkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgSW5pdFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgfVxuICAgICAgICBJbml0UGFnZSgpXG5cbiAgICAgICAgcGxhY2VCZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudEJldClcbiAgICAgICAgICAgIGlmKGN1cnJlbnRCZXQpe1xuICAgICAgICAgICAgICAgIHBsYWNlQmV0KGN1cnJlbnRCZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY3VycmVudEJldCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50QmV0ID0gbmV3IEJldCh1c2VySWQsIG1hdGNoTnVtYmVyKVxuICAgICAgICAgICAgICAgIHBsYWNlQmV0KGN1cnJlbnRCZXQpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRCZXQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjb3JlKG1hdGNoTnVtYmVyLCB0ZWFtMUdvYWxzLCB0ZWFtMkdvYWxzKSB7XG4gICAgICAgIGlmIChjdXJyZW50QmV0ICYmIGN1cnJlbnRCZXQubWF0Y2hOdW1iZXIgPT09IG1hdGNoTnVtYmVyKSB7XG4gICAgICAgICAgICBjdXJyZW50QmV0LnVwZGF0ZUdvYWxzKHRlYW0xR29hbHMsIHRlYW0yR29hbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudEJldCA9IG5ldyBCZXQodXNlcklkLCBtYXRjaE51bWJlciwgdGVhbTFHb2FscywgdGVhbTJHb2Fscyk7XG4gICAgICAgICAgICBjdXJyZW50QmV0LnVwZGF0ZUdvYWxzKHRlYW0xR29hbHMsIHRlYW0yR29hbHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRCZXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVGaXJzdEdvYWwobWF0Y2hOdW1iZXIsIGZpcnN0R29hbCkge1xuICAgICAgICBpZiAoY3VycmVudEJldCAmJiBjdXJyZW50QmV0Lm1hdGNoTnVtYmVyID09PSBtYXRjaE51bWJlcikge1xuICAgICAgICAgICAgY3VycmVudEJldC51cGRhdGVGaXJzdEdvYWwoZmlyc3RHb2FsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRCZXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVUb3BGb3JlY2FzdHMobWF0Y2hOdW1iZXIpIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7bWF0Y2hOdW1iZXJ9YCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEudG9wRm9yZWNhc3RzKTsgLy8g0J/QtdGA0LXQstGW0YDQutCwINC+0YLRgNC40LzQsNC90LjRhSDQtNCw0L3QuNGFXG4gICAgICAgICAgICBpZihzaG93VG9wRm9yZWNhc3Qpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19mb3JlY2FzdHMnKTtcbiAgICAgICAgICAgICAgICBmb3JlY2FzdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgZGF0YS50b3BGb3JlY2FzdHMuZm9yRWFjaChmb3JlY2FzdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBmb3JlY2FzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJlZGljdF9fZm9yZWNhc3RzLWl0ZW0nKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gcGFyc2VGbG9hdChmb3JlY2FzdC5wZXJjZW50YWdlKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZVNwYW4udGV4dENvbnRlbnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9yZWNhc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCAke2ZvcmVjYXN0LmZvcmVjYXN0ID8/IFwiMC0wXCJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChwZXJjZW50YWdlU3Bhbik7XG4gICAgICAgICAgICAgICAgICAgIGZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChmb3JlY2FzdFRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcmVjYXN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0b3AgZm9yZWNhc3RzOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKCkge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHtjdXJyZW50VGFiVGFibGV9YClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJzID0gZGF0YS51c2Vyc1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlcnMpXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTY29yZVRhYkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLXNjb3JlLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzR29hbFRhYkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLWdvYWwuYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBpZih1c2Vycy5sZW5ndGggPj0gNTApe1xuICAgICAgICAgICAgICAgICAgICBzaG93VG9wRm9yZWNhc3QgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHVzZXJzLmxlbmd0aCA8IDUwKXtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1RvcEZvcmVjYXN0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTY29yZVRhYkFjdGl2ZSAmJiBzaG93VG9wRm9yZWNhc3QpIHRvcEZvcmVjYXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgaWYgKGlzR29hbFRhYkFjdGl2ZSkgdG9wRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcblxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIHVzZXJJZClcblxuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCBjdXJyZW50VGFiVGFibGUpXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VycylcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgbWF0Y2hOdW1iZXIpIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBpZiAoIXVzZXJzIHx8ICF1c2Vycy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAvLyAvLyDQpNGW0LvRjNGC0YDRg9GU0LzQviDQutC+0YDQuNGB0YLRg9Cy0LDRh9GW0LIsINGP0LrRliDQt9GA0L7QsdC40LvQuCDRgdGC0LDQstC60YMg0L3QsCDQstC60LDQt9Cw0L3QuNC5INC80LDRgtGHXG4gICAgICAgIC8vIGNvbnN0IHVzZXJzID0gdXNlcnMuZmlsdGVyKHVzZXIgPT5cbiAgICAgICAgLy8gICAgIHVzZXIuYmV0cy5zb21lKGJldCA9PiBiZXQubWF0Y2hOdW1iZXIgPT09IG1hdGNoTnVtYmVyKVxuICAgICAgICAvLyApO1xuXG4gICAgICAgIC8vIGlmICghdXNlcnMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgLy8g0JfQvdCw0YXQvtC00LjQvNC+INC/0L7RgtC+0YfQvdC+0LPQviDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcblxuICAgICAgICAvLyDQktC40LLQvtC00LjQvNC+INCy0YHRltGFINGW0L3RiNC40YUg0LrQvtGA0LjRgdGC0YPQstCw0YfRltCyINGDIHJlc3VsdHNUYWJsZVxuICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIudXNlcmlkICE9PSBjdXJyZW50VXNlcklkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgZmFsc2UsIHJlc3VsdHNUYWJsZSwgdXNlcnMsIG1hdGNoTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0JLQuNCy0L7QtNC40LzQviDQv9C+0YLQvtGH0L3QvtCz0L4g0LrQvtGA0LjRgdGC0YPQstCw0YfQsCDQsiByZXN1bHRzVGFibGVPdGhlclxuICAgICAgICBpZiAoY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIG1hdGNoTnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgYWxsVXNlcnMsIG1hdGNoTnVtYmVyKSB7XG4gICAgICAgIGxldCBtYXRjaERhdGU7XG5cbiAgICAgICAgaWYgKG1hdGNoTnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICBtYXRjaERhdGUgPSBGSVJTVF9NQVRDSF9EQVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaE51bWJlciA9PT0gMikge1xuICAgICAgICAgICAgbWF0Y2hEYXRlID0gU0VDT05EX01BVENIX0RBVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoTnVtYmVyID09PSAzKSB7XG4gICAgICAgICAgICBtYXRjaERhdGUgPSBUSElSRF9NQVRDSF9EQVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaE51bWJlciA9PT0gNCkge1xuICAgICAgICAgICAgbWF0Y2hEYXRlID0gRk9VUlRIX01BVENIX0RBVEU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxVc2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZGl0aW9uYWxVc2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj4ke2lzQ3VycmVudFVzZXIgPyB1c2VyLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlci51c2VyaWQpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAke2N1cnJlbnREYXRlID49IG1hdGNoRGF0ZSA/XG4gICAgICAgICAgICBgPHNwYW4+JHt1c2VyLnRlYW0xICE9PSB1bmRlZmluZWQgJiYgdXNlci50ZWFtMSAhPT0gbnVsbCA/IHVzZXIudGVhbTEgOiBcIi1cIn08L3NwYW4+PGltZyBzcmM9XCJodHRwczovL2Zhdi1wcm9tLmNvbS9odG1sL2dvYWxzLW9yLXplcm9lcy9pbWcvdnMucG5nXCIgYWx0PVwidnNcIj48c3Bhbj4ke3VzZXIudGVhbTIgIT09IHVuZGVmaW5lZCAmJiB1c2VyLnRlYW0yICE9PSBudWxsID8gdXNlci50ZWFtMiA6IFwiLVwifTwvc3Bhbj5gIDpcbiAgICAgICAgICAgIGA8c3Bhbj4qKjwvc3Bhbj48aW1nIHNyYz1cImh0dHBzOi8vZmF2LXByb20uY29tL2h0bWwvZ29hbHMtb3ItemVyb2VzL2ltZy92cy5wbmdcIiBhbHQ9XCJ2c1wiPjxzcGFuPioqPC9zcGFuPmBcbiAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICR7dXNlci53aW5uZXIgPT09IHRydWUgID9cbiAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIiBkYXRhLXRyYW5zbGF0ZT1cInByaXplXCI+KioqKio8L2Rpdj5gIDpcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIiBkYXRhLXRyYW5zbGF0ZT1cIm5vV2lubmVyc1wiPioqKioqPC9kaXY+YFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAke3VzZXIuYm9udXNGaXJzdEdvYWwgPT09IHRydWUgID9cbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCJzczUwMFwiPioqKioqPC9kaXY+YCA6XG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwibm9XaW5uZXJzXCI+KioqKio8L2Rpdj5gXG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBhZGRpdGlvbmFsVXNlclJvdy5jbGFzc0xpc3QuYWRkKFwieW91XCIpO1xuICAgICAgICAgICAgYWRkaXRpb25hbFVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPiR7aXNDdXJyZW50VXNlciA/IHVzZXIudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyLnVzZXJpZCl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+JHt1c2VyLnRlYW0xICE9PSB1bmRlZmluZWQgJiYgdXNlci50ZWFtMSAhPT0gbnVsbCA/IHVzZXIudGVhbTEgOiBcIi1cIn08L3NwYW4+PGltZyBzcmM9XCJodHRwczovL2Zhdi1wcm9tLmNvbS9odG1sL2dvYWxzLW9yLXplcm9lcy9pbWcvdnMucG5nXCIgYWx0PVwidnNcIj48c3Bhbj4ke3VzZXIudGVhbTIgIT09IHVuZGVmaW5lZCAmJiB1c2VyLnRlYW0yICE9PSBudWxsID8gdXNlci50ZWFtMiA6IFwiLVwifTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgJHt1c2VyLndpbm5lciA9PT0gdHJ1ZSAgP1xuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCIgZGF0YS10cmFuc2xhdGU9XCJwcml6ZVwiPioqKioqPC9kaXY+YCA6XG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIiBkYXRhLXRyYW5zbGF0ZT1cIm5vV2lubmVyc1wiPioqKioqPC9kaXY+YFxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICR7dXNlci5ib251c0ZpcnN0R29hbCA9PT0gdHJ1ZSAgP1xuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwic3M1MDBcIj4qKioqKjwvZGl2PmAgOlxuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiIGRhdGEtdHJhbnNsYXRlPVwibm9XaW5uZXJzXCI+KioqKio8L2Rpdj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICAgICAgICBjb25zdCB5b3VCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgeW91QmxvY2suY2xhc3NMaXN0LmFkZCgndGFibGVfX3Jvdy15b3UnKTtcbiAgICAgICAgICAgIHlvdUJsb2NrLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCAndGFibGVZb3UnKTtcbiAgICAgICAgICAgIC8vIHlvdUJsb2NrLnRleHRDb250ZW50ID0gXCJZb3VcIjtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxVc2VyUm93Lmluc2VydEJlZm9yZSh5b3VCbG9jaywgYWRkaXRpb25hbFVzZXJSb3cuY2hpbGRyZW5bMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFibGUuYXBwZW5kKGFkZGl0aW9uYWxVc2VyUm93KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIC8vIDNEIGFuaW1cbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVhbSwgLmFuaW1DYXJkLCAuYW5pbVJpZ2h0XCIpOyAvLyDQlNC+0LHQsNCy0LvRj9C10LwgLmFuaW1SaWdodFxuICAgIGxldCBhbmdsZSA9IDA7XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlQ2FyZHMoKSB7XG4gICAgICAgIGFuZ2xlICs9IDAuOTsgLy8gc3BlZWRcbiAgICAgICAgY29uc3Qgcm90YXRlWCA9IE1hdGguc2luKGFuZ2xlICogKE1hdGguUEkgLyAxODApKSAqIDEwOyAvLyDQmtC+0LvQtdCx0LDQvdC40LUg0L/QviBYXG4gICAgICAgIGNvbnN0IHJvdGF0ZVkgPSBNYXRoLmNvcyhhbmdsZSAqIChNYXRoLlBJIC8gMTgwKSkgKiAxMDsgLy8g0JrQvtC70LXQsdCw0L3QuNC1INC/0L4gWVxuXG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoXCJhbmltUmlnaHRcIikpIHtcbiAgICAgICAgICAgICAgICBjYXJkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVZKCR7LXJvdGF0ZVl9ZGVnKSByb3RhdGVYKCR7LXJvdGF0ZVh9ZGVnKWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHtyb3RhdGVZfWRlZykgcm90YXRlWCgke3JvdGF0ZVh9ZGVnKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlQ2FyZHMpO1xuICAgIH1cbiAgICBhbmltYXRlQ2FyZHMoKTtcblxuICAgIC8vIHByZWRpY3QgdGFic1xuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fdGFicy1nbG9iYWwgPiBkaXYsIC5wcmVkaWN0X190YWJzLWRhdGVzID4gZGl2Jyk7XG4gICAgY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X19jb250YWluZXInKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRhYkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGxldCBtYXRjaERhdGU7XG5cbiAgICAgICAgY29uc3QgY2xpY2tlZFRhYiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnByZWRpY3RfX3RhYnMtZGF0ZVwiKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdChcIi5wcmVkaWN0X190YWJzLWdvYWxcIikgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucHJlZGljdF9fdGFicy1zY29yZVwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2xpY2tlZFRhYilcbiAgICAgICAgY29uc3QgdGFiUGFpciA9IGNsaWNrZWRUYWIuY2xvc2VzdCgnLnByZWRpY3RfX3RhYnMtZ2xvYmFsJykgfHwgY2xpY2tlZFRhYi5jbG9zZXN0KCcucHJlZGljdF9fdGFicy1kYXRlcycpO1xuXG4gICAgICAgIGxldCBjdXJyZW50TWF0Y2ggPSBOdW1iZXIoY2xpY2tlZFRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hdGNoLW51bWJlclwiKSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjbGlja2VkVGFiKVxuXG4gICAgICAgIGlmKGN1cnJlbnRNYXRjaCA9PT0gMSl7XG4gICAgICAgICAgICBtYXRjaERhdGUgPSBGSVJTVF9NQVRDSF9EQVRFXG4gICAgICAgIH1cbiAgICAgICAgaWYoY3VycmVudE1hdGNoID09PSAyKXtcbiAgICAgICAgICAgIG1hdGNoRGF0ZSA9IFNFQ09ORF9NQVRDSF9EQVRFXG4gICAgICAgIH1cbiAgICAgICAgaWYoY3VycmVudE1hdGNoID09PSAzKXtcbiAgICAgICAgICAgIG1hdGNoRGF0ZSA9IFRISVJEX01BVENIX0RBVEVcbiAgICAgICAgfVxuICAgICAgICBpZihjdXJyZW50TWF0Y2ggPT09IDQpe1xuICAgICAgICAgICAgbWF0Y2hEYXRlID0gRk9VUlRIX01BVENIX0RBVEVcbiAgICAgICAgfVxuICAgICAgICBpZihjdXJyZW50RGF0ZSA+IG1hdGNoRGF0ZSl7XG4gICAgICAgICAgICBwbGFjZUJldEJ0bi5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBwbGFjZUJldEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiX2xvY2tcIilcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGNsaWNrZWRUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBpZiAodGFiUGFpcikge1xuICAgICAgICAgICAgY29uc3QgcGFpciA9IHRhYlBhaXIucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKHBhaXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBhaXJbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjbGlja2VkVGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB1cGRhdGVDb250YWluZXJzKCk7XG4gICAgICAgIC8vIHJlZnJlc2hCZXRJbmZvKHVzZXJJZClcbiAgICAgICAgaWYoY2xpY2tlZFRhYi5jbG9zZXN0KCcucHJlZGljdF9fdGFicy1kYXRlcycpKXtcbiAgICAgICAgICAgIHVwZGF0ZVRvcEZvcmVjYXN0cyhjdXJyZW50TWF0Y2gpXG4gICAgICAgICAgICBjdXJyZW50QmV0ID0gbmV3IEJldCh1c2VySWQsIGN1cnJlbnRNYXRjaClcbiAgICAgICAgICAgIG1hdGNoTnVtYmVyID0gTnVtYmVyKGNsaWNrZWRUYWIuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXRjaC1udW1iZXJcIikpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZWRpY3RfX3RlYW0tbnVtYmVyXCIpLmZvckVhY2goKHNjb3JlLCBpKSA9PntcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaERhdGUsIG1hdGNoTnVtYmVyKVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnREYXRlID4gbWF0Y2hEYXRlICYmIGkgPT09IDEgJiYgbWF0Y2hOdW1iZXIgPT09IDEpe1xuICAgICAgICAgICAgICAgICAgICBzY29yZS50ZXh0Q29udGVudCA9IFwiMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY3VycmVudERhdGUgPiBtYXRjaERhdGUgJiYgaSA9PT0gMCAmJiBtYXRjaE51bWJlciA9PT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlLnRleHRDb250ZW50ID0gXCIwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgICAgICAgICAvLyAgICAgc2NvcmUudGV4dENvbnRlbnQgPSBcIjBcIlxuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihGSVJTVF9NQVRDSF9EQVRFLCAxKTsgLy8g0JTQu9GPINC/0LXRgNGI0L7Qs9C+INC80LDRgtGH0YNcbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKFNFQ09ORF9NQVRDSF9EQVRFLCAyKTsgLy8g0JTQu9GPINC00YDRg9Cz0L7Qs9C+INC80LDRgtGH0YNcbiAgICAgICAgbG9ja01hdGNoQ29udGFpbmVyKFRISVJEX01BVENIX0RBVEUsIDMpOyAvLyDQlNC70Y8g0YLRgNC10YLRjNC+0LPQviDQvNCw0YLRh9GDXG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihGT1VSVEhfTUFUQ0hfREFURSwgNCk7IC8vINCU0LvRjyDRh9C10YLQstC10YDRgtC+0LPQviDQvNCw0YLRh9GDXG4gICAgfVxuXG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVUYWJDbGljaykpO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVycygpIHtcbiAgICAgICAgY29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG4gICAgICAgIGNvbnN0IGlzU2NvcmVUYWJBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1zY29yZS5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgaXNHb2FsVGFiQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3RhYnMtZ29hbC5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgaXNEYXRlMUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLWRhdGUuZGF0ZTEuYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGlzRGF0ZTJBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fdGFicy1kYXRlLmRhdGUyLmFjdGl2ZScpO1xuICAgICAgICBjb25zdCBpc0RhdGUzQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3RhYnMtZGF0ZS5kYXRlMy5hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgaXNEYXRlNEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190YWJzLWRhdGUuZGF0ZTQuYWN0aXZlJyk7XG5cblxuICAgICAgICBpZiAoaXNTY29yZVRhYkFjdGl2ZSkge1xuICAgICAgICAgICAgaWYoc2hvd1RvcEZvcmVjYXN0KSB0b3BGb3JlY2FzdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuXG4gICAgICAgICAgICBpZiAoaXNEYXRlMUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250YWluZXIuc2NvcmUtMScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0RhdGUyQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRhaW5lci5zY29yZS0yJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZTNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGFpbmVyLnNjb3JlLTMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlNEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250YWluZXIuc2NvcmUtNCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzR29hbFRhYkFjdGl2ZSkge1xuICAgICAgICAgICAgaWYoc2hvd1RvcEZvcmVjYXN0KSB0b3BGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgaWYgKGlzRGF0ZTFBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGFpbmVyLmdvYWwtMScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0RhdGUyQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX2NvbnRhaW5lci5nb2FsLTInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlM0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X19jb250YWluZXIuZ29hbC0zJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZTRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdF9fY29udGFpbmVyLmdvYWwtNCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9zY29yZVxuXG4gICAgZnVuY3Rpb24gc2NvcmVJbml0KGJ0bil7XG4gICAgICAgIGNvbnN0IHRlYW1Db250cm9sID0gYnRuLmNsb3Nlc3QoJy5wcmVkaWN0X190ZWFtLWNvbnRyb2wnKTtcbiAgICAgICAgY29uc3QgdGVhbU51bWJlciA9IHRlYW1Db250cm9sLnF1ZXJ5U2VsZWN0b3IoJy5wcmVkaWN0X190ZWFtLW51bWJlcicpXG4gICAgICAgIGNvbnN0IG1hdGNoQ29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5wcmVkaWN0X19jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbWF0Y2hOdW1iZXIgPSBwYXJzZUludChtYXRjaENvbnRhaW5lci5kYXRhc2V0Lm1hdGNoTnVtYmVyKTtcblxuICAgICAgICBjb25zdCBnZXRHb2FscyA9ICh0ZWFtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbWF0Y2hDb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEtdGVhbT1cIiR7dGVhbX1cIl0gLnByZWRpY3RfX3RlYW0tbnVtYmVyYCk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudCA/IE51bWJlcihlbGVtZW50LnRleHRDb250ZW50KSB8fCAwIDogMDtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGNvbnN0IHRlYW0xR29hbHMgPSBnZXRHb2FscygndGVhbTEnKSA7XG4gICAgICAgIGNvbnN0IHRlYW0yR29hbHMgPSBnZXRHb2FscygndGVhbTInKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZWFtMUdvYWxzLCB0ZWFtMkdvYWxzKVxuXG4gICAgICAgIHVwZGF0ZVNjb3JlKG1hdGNoTnVtYmVyLCB0ZWFtMUdvYWxzLCB0ZWFtMkdvYWxzKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fdGVhbS1pbmNyZWFzZSwgLnByZWRpY3RfX3RlYW0tZGVjcmVhc2UnKS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICBjb25zdCB0ZWFtQ29udHJvbCA9IGJ0bi5jbG9zZXN0KCcucHJlZGljdF9fdGVhbS1jb250cm9sJyk7XG4gICAgICAgICAgICBjb25zdCB0ZWFtTnVtYmVyID0gdGVhbUNvbnRyb2wucXVlcnlTZWxlY3RvcignLnByZWRpY3RfX3RlYW0tbnVtYmVyJylcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoQ29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5wcmVkaWN0X19jb250YWluZXInKTtcblxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQodGVhbU51bWJlci50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygncHJlZGljdF9fdGVhbS1pbmNyZWFzZScpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlYW1OdW1iZXIudGV4dENvbnRlbnQgPSBgJHt2YWx1ZX1gO1xuICAgICAgICAgICAgc2NvcmVJbml0KGJ0bilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJldClcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIC8vdGFibGUgdGFic1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1kYXRlJykuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RhYnMtZGF0ZScpLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY3VycmVudFRhYlRhYmxlID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX3RhYnMtZGF0ZS5hY3RpdmVcIikuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXRjaC1udW1iZXJcIikpXG4gICAgICAgICAgICByZW5kZXJVc2VycygpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBcblxuICAgIC8vcG9wdXBzXG5cbiAgICBmdW5jdGlvbiBzZXRQb3B1cHModHJpZ2dlckJ1dHRvbnMsIHBvcHVwQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgcG9wdXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpO1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cHNfX2l0ZW0uJHtwb3B1cENsYXNzfWApO1xuICAgICAgICBjb25zdCBwb3B1cEJ0biA9IHBvcHVwc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwc19faXRlbS1idG5cIilcblxuXG4gICAgICAgIGlmICghdHJpZ2dlckJ1dHRvbnMgfHwgIXBvcHVwIHx8ICFwb3B1cHNDb250YWluZXIpIHJldHVybjtcblxuICAgICAgICB0cmlnZ2VyQnV0dG9ucy5mb3JFYWNoKHRyaWdnZXJCdXR0b24gPT4ge1xuICAgICAgICAgICAgdHJpZ2dlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnX29wYWNpdHknKTtcbiAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChwb3B1cENsYXNzKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzX19pdGVtLWNsb3NlJyk7XG4gICAgICAgIGNvbnN0IGJ0bkNsb3NlID0gcG9wdXAucXVlcnlTZWxlY3RvcignLmJ0bi1jbG9zZScpO1xuXG4gICAgICAgIHBvcHVwc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gcG9wdXBzQ29udGFpbmVyIHx8IGUudGFyZ2V0ID09PSBjbG9zZUJ1dHRvbiB8fCBlLnRhcmdldCA9PT0gYnRuQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKSB7XG4gICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX29wYWNpdHknKTtcbiAgICAgICAgICAgIHBvcHVwc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHBvcHVwQ2xhc3MpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBvcHVwQnRuKVxuICAgICAgICBwb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgY2xvc2VQb3B1cCgpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBzZXRQb3B1cHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdpZGVfX2xpc3QtYnRuJyksICdnaWRlUG9wdXAnKTtcbiAgICBzZXRQb3B1cHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZWRpY3RfX2J0bi50b29rLXBhcnQnKSwgJ19jb25maXJtUG9wdXAnKTtcblxuICAgIC8vZ28gdG8gcHJlZGljdFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9QcmVkaWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVkaWN0XCIpO1xuICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gMjtcblxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiB0YXJnZXRQb3NpdGlvbixcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByYWRpb0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fcmFkaW8nKTtcblxuICAgIHJhZGlvQ29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmVkaWN0X19yYWRpby1pdGVtJyk7XG5cbiAgICAgICAgcmFkaW9JbnB1dHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJhZGlvSW5wdXRzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWUpXG5cbiAgICAgICAgICAgICAgICB1cGRhdGVGaXJzdEdvYWwobWF0Y2hOdW1iZXIsIHRoaXMucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgICAgICAudGhlbihpbml0KVxuXG4gICAgaW5pdCgpXG5cbiAgICAvLyBURVNUXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCIxODkwODQ2NVwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1sYXN0UHJlZCcpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJlZGljdF9fbGFzdCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXRQb3B1cHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi10aGVua3MnKSwgJ19jb25maXJtUG9wdXAnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcHJlZGljdCcpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuY29uZmlybWVkJykuZm9yRWFjaCh1bmNvbmZpcm1lZCA9PiB7XG4gICAgICAgICAgICAgICAgdW5jb25maXJtZWQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbmZpcm1lZCcpLmZvckVhY2goY29uZmlybWVkID0+IHtcbiAgICAgICAgICAgICAgICBjb25maXJtZWQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYWZ0ZXJcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IEZJUlNUX01BVENIX0RBVEUgPSBuZXcgRGF0ZSgnMjAyMi0wMy0yMFQyMToxNTowMCcpXG4gICAgICAgIGxvY2tNYXRjaENvbnRhaW5lcihGSVJTVF9NQVRDSF9EQVRFLCAxKTtcbiAgICAgICAgcGxhY2VCZXRCdG4uY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9jayB0YWJsZVwiKVxuICAgIH0pO1xuXG4gICAgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSA/PyBudWxsXG5cbiAgICB1cGRhdGVUb3BGb3JlY2FzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGVUb3BGb3JlY2FzdHMg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgIH1cblxuICAgIHJlbmRlclVzZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVuZGVyVXNlcnMg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgIH1cblxuICAgIHBvcHVsYXRlVXNlcnNUYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BvcHVsYXRlVXNlcnNUYWJsZSDQstC40LzQutC90LXQvdC+INC00LvRjyDRgtC10YHRgtGDJyk7XG4gICAgfVxuXG4gICAgZGlzcGxheVVzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkaXNwbGF5VXNlciDQstC40LzQutC90LXQvdC+INC00LvRjyDRgtC10YHRgtGDJyk7XG4gICAgfVxuICAgIHNob3dUb3BGb3JlY2FzdCA9IHRydWVcbn0pKClcbiJdfQ==
