/*
IssueTracker is used to help format validation messages
 */

// ES5
function OldIssueTracker () {
  this.issues = [];
}
OldIssueTracker.prototype = {
  add: function (issue) {
    this.issues.push(issue);
  },
  retrieve: function () {
    var message = "";
    switch (this.issues.length) {
      case 0:
        break; // do nothing bc message is already ""
      case 1:
        message = "Please correct the following issue:\n" + this.issues[0];
        break;
      default:
        message = "Please correct the following issues:\n" + this.issues.join('\n');
        break;
    }
    return message;
  }
};

// ES6
class IssueTracker {
  constructor() {
    this.issues = [];
  }
  
  add(issue) {
    this.issues.push(issue);
  }
  retrieve() {
    let message = "";
    switch (this.issues.length) {
      case 0:
        break; // do nothing bc message is already ""
      case 1:
        message = "Please correct the following issue:\n" + this.issues[0];
        break;
      default:
        message = "Please correct the following issues:\n" + this.issues.join('\n');
        break;
    }
    return message;
  }
}
/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */  
submit.onclick = function () {
  // grab input's values
  var firstPassword = firstPasswordInput.value;
  var secondPassword = secondPasswordInput.value;

  // issue tracker for ea input bc some validation msgs
  // should end up on the first, some on the second
  var firstInputIssuesTracker = new IssueTracker();
  var secondInputIssuesTracker = new IssueTracker();

  // Step through all requirements & add message when req fails.
  function checkRequirements() {
    if (firstPassword.length < 16) {
      // firstPasswordInput.setCustomValidity('16 characters');
      firstInputIssuesTracker.add('16 characters');
    } else if (firstPassword.length > 100) {
      // firstPasswordInput.setCustomValidity('100 characters');
      firstInputIssuesTracker.add('100 characters');
    }
    if (!firstPassword.match(/[\!\@\#\$\%\^\&\*]/g)) {
      // firstPasswordInput.setCustomValidity('symbol');
      firstInputIssuesTracker.add('symbol');
    }
    if (!firstPassword.match(/[0-9]/g)) {
      // firstPasswordInput.setCustomValidity('number');
      firstInputIssuesTracker.add('number');
    }
    if (!firstPassword.match(/[a-z]/g)) {
      // firstPasswordInput.setCustomValidity('lowercase');
      firstInputIssuesTracker.add('lowercase');
    }
    if (!firstPassword.match(/[A-Z]/g)) {
      // firstPasswordInput.setCustomValidity('uppercase');
      firstInputIssuesTracker.add('uppercase');
    }
    var illegalCharacterGroup = firstPassword.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g);
    if (illegalCharacterGroup) {
      // firstPasswordInput.setCustomValidity('illegal');
      firstInputIssuesTracker.add('illegal');
    }
  }

  if (firstPassword !== secondPassword) {
    // firstPasswordInput.setCustomValidity('match');
    secondInputIssuesTracker.add('match');
  } else {
    checkRequirements();
  }

  const firstInputIssues = firstInputIssuesTracker.retrieve();
  const secondInputIssues = secondInputIssuesTracker.retrieve();

  firstPasswordInput.setCustomValidity(firstInputIssues);
  secondPasswordInput.setCustomValidity(secondInputIssues);

  if (firstInputIssues.length + secondInputIssues.length === 0) {
    alert('Password change successful');
  }
};
