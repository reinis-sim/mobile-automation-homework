$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/BasicActions.feature");
formatter.feature({
  "name": "Basic Actions",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check languages",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Stack button\"",
  "keyword": "When "
});
formatter.match({
  "location": "ActionSteps.i_click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll to \"Settings\"",
  "keyword": "And "
});
formatter.match({
  "location": "ActionSteps.iScrollTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Settings\"",
  "keyword": "And "
});
formatter.match({
  "location": "ActionSteps.i_click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Country or region\"",
  "keyword": "And "
});
formatter.match({
  "location": "ActionSteps.i_click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Switch widget\"",
  "keyword": "And "
});
formatter.match({
  "location": "ActionSteps.i_click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"United States\"",
  "keyword": "When "
});
formatter.match({
  "location": "ActionSteps.i_click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \"Sw\"",
  "keyword": "And "
});
formatter.match({
  "location": "ActionSteps.i_search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the following fields:",
  "rows": [
    {
      "cells": [
        "Swaziland"
      ]
    },
    {
      "cells": [
        "Sweden"
      ]
    },
    {
      "cells": [
        "Switzerland"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.i_see_the_following_fields(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});