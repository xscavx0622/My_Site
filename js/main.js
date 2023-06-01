// Formatting
//-----------------------------------------------------
const OUTPUT_STRING = "  ";

var glow = function (text) {
  return "[[g;#EEEEEE;]" + text + "]";
};

var titleText = function (text) {
  return "[[u;inherit;]" + text + "]";
};

function orange(message) {
  return "[[gb;orange;black]" + message + "]";
}
//-----------------------------------------------------

var banner = orange(
    "|\t██████╗  ██████╗  ██████╗██╗  ██╗   ███████╗\t|\n"+
    "|\t██╔══██╗██╔═══██╗██╔════╝██║ ██╔╝   ╚══███╔╝\t|\n" +
    "|\t██████╔╝██║   ██║██║     █████╔╝      ███╔╝ \t|\n" +
    "|\t██╔══██╗██║   ██║██║     ██╔═██╗     ███╔╝  \t|\n" +
    "|\t██║  ██║╚██████╔╝╚██████╗██║  ██╗██╗███████╗\t|\n" +
    "|\t╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚═╝╚══════╝\t|\n" +
    "|\t      \u00A9 " +
    getYear() +
    "|___/\t|\n\n\n"
);

const welcomeMessage = `Welcome to my site fellow humans and non-Tesseractual Bugs.
Type 'help' to view a list of available commands.
Type "download_CV" for my super awesome galactic resume.
`;
const starWarsMessage = `Star Wars: Episode IV produced by Simon Jansen (http://www.asciimation.co.nz)
Press ctrl + z to stop.`;
// Boolean to keep track of whether Star Wars is animating
var play = false;

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

// Just a little helper function so I don't have to continually update my age
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function getYear() {
  var today = new Date();
  return today.getFullYear();
}
const messages = {
  repo: `
${OUTPUT_STRING} https://github.com/xscavx0622
${OUTPUT_STRING} https://www.behance.net/rockz1
`,
  help: `
Wow, I thought the only people who would visit this site would be bots and spammers and EVIL BUGS BEGONE!!! Anyways guess I was wrong.
Just type any of the commands below to get some more info. You can even type a few letters and press [tab] to autocomplete.

${OUTPUT_STRING}${glow("about")}              - Stop stalking me
${OUTPUT_STRING}${glow(
    "projects"
  )}           - Yeah, I've made some cool stuff before
${OUTPUT_STRING}${glow("skills")}             - I'm pretty good at some things
${OUTPUT_STRING}${glow("repo")}               - Take a look at some of my work

${OUTPUT_STRING}${glow("download_cv")}        - Check out my CV [pdf - 172KB]

${OUTPUT_STRING}${glow("contact")}            - Bring on the spam
${OUTPUT_STRING}${glow("credits")}            - Thanks for the help

${OUTPUT_STRING}${glow("all")}                - Tell me everything

P.S. There's a pretty awesome command that I haven't told you about - see if you can find it!
Hint: Check out the source code.
`,
  about: `
Hey there! Thanks for taking such a keen interest in me.
Hopefully you're not gonna spam or stalk me or turn me in to the EVIL TESSERACTUAL BUGS
Okay, I guess if you must stalk me, just give me fair warning so I can look presentable when you arrive at my door.

Right, so, where to begin? Well, my parents met in... Nah, just kidding.
As you probably know, my name is ${glow("Rock Zgheib")}.
I'm a ${getAge("1992/02/29")} year old ${glow(
    "UX Designer and Web Developer and previously an Interior Design Architect"
  )} born and bred in the lands of Cedar Lebanon and currently living there.
I graduated with distinction from AUL University with a bachelors degree in Interior Design.
Nowadays I'm developing a method to download food... I wish!
Some of my interests include ${glow(
    "Adventuring into the depth of our Galaxy..., Gaming, Playing my trusty Six String Axe (a Guitar in Earthen term) ,Sketching, Cryptocurrency"
  )}.
I'm a big pirates enthusiast though in our current year of 3856X pirates are known to be the royal army of our King!

My previous formal work experience includes working in the interior design field specifically 3D modeling and rendering, fun times...

I am currently focusing on my career change, as I recently recieved my UX/UI Design and Fundamentals Certificate from Coursera and Google,
as well as Web Development from The John Hopkins University.
Currently I am working on some personal projects, but please feel free to get in touch with me to discuss any cool opportunities!
My contact details can be found by typing 'contact', and if you would like to check out my CV, simply type 'download_CV'.
`,
  projects: `
I'm always working on new designs either UI's or Websites and Apps.
Why don't you check out a few of my public repos? Just type 'repo' to get the links.
`,
  skills: `
${OUTPUT_STRING}${glow(
    "HTML/CSS"
  )}             ##  [[g;#00DE12;]#################################################]  ##
${OUTPUT_STRING}${glow(
    "Javascript"
  )}           ##  [[g;#42D100;]#######################]                            ##
${OUTPUT_STRING}${glow(
    "React"
  )}                ##  [[g;#D16200;]##########]                                         ##
${OUTPUT_STRING}${glow(
    "Figma"
  )}                ##  [[g;#00DE12;]##########################################]         ##
${OUTPUT_STRING}${glow(
    "Three.JS"
  )}             ##  [[g;#99D100;]#######################]                            ##
${OUTPUT_STRING}${glow(
    "Web Dev"
  )}              ##  [[g;#D1B900;]############################]                       ##

  More skills are displayed in my GitHub profile please enjoy it.
  Type "repo" for my beautiful projects.
`,
  contact: `
${OUTPUT_STRING}${glow("Email")}            - rock.zgh@outlook.com
${OUTPUT_STRING}${glow("Carrier Pigeon")}   - general Mount Lebanon area
${OUTPUT_STRING}${glow("mySpace")}          - just kidding (who remembers Tom though)
`,
  credits: `
${OUTPUT_STRING}Site built by ${glow("me")}
${OUTPUT_STRING}Using ${glow("JQuery Terminal Emulator")} by ${glow(
    "Jakub Jankiewicz"
  )} (http://terminal.jcubic.pl)
`,
  awards: `
`,
};

var commands = {
  help: function () {
    this.echo(messages.help);
  },

  repo: function () {
    this.echo(messages.repo);
  },

  about: function () {
    this.echo(messages.about);
  },

  projects: function () {
    this.echo(messages.projects);
  },

  skills: function () {
    this.echo(messages.skills);
  },

  contact: function () {
    this.echo(messages.contact);
  },

  credits: function () {
    this.echo(messages.credits);
  },

  download_CV: function () {
    downloadURI(
      "downloads/Rock_Zgheib Resume.pdf",
      "Rock_Zgheib Resume.pdf"
    );
  },

  all: function () {
    this.clear();
    this.exec("about");
    this.exec("projects");
    this.exec("skills");
    this.exec("repo");
    this.exec("contact");
    this.exec("credits");
  },

  clear: function () {
    this.clear();

    this.echo(banner);
    play ? this.echo(starWarsMessage + "\n\n") : this.echo(welcomeMessage);
  },

  // Wohoo you found the pretty awesome command that I didn't tell you about.
  star_wars: function () {
    initStarWars(this);
  },
};

//-----------------------------------------------------------

$(function () {
  var isTyping = false;
  function typed(finish_typing) {
    return function (term, message, delay) {
      isTyping = true;
      var prompt = term.get_prompt();
      var c = 0;
      if (message.length > 0) {
        term.set_prompt("");
        var interval = setInterval(function () {
          term.insert(message[c++]);
          if (c == message.length) {
            clearInterval(interval);
            // execute in next interval
            setTimeout(function () {
              // swap command with prompt
              finish_typing(term, message, prompt);
              isTyping = false;
            }, delay);
          }
        }, delay);
      }
    };
  }

  var typed_message = typed(function (term, message, prompt) {
    term.set_command("");
    term.echo(message);
    term.set_prompt(prompt);
  });

  $("body").terminal(commands, {
    greetings: banner,
    prompt: "> ",
    completion: true,
    checkArity: false,
    clear: false,

    onInit: function (term) {
      typed_message(term, welcomeMessage, 0, function () {});
    },

    keydown: function (e) {        
      // ctrl-z - Stop Star Wars
      if (e.which == 90 && e.ctrlKey) {
        play = false;
        return false;
      }

      if (play) {
        return false;
      }

      if (isTyping) {
        return false;
      }
    },

    keypress: function (e, term) {
      console.log("keypress: " + e.which);
    },

    onFocus: function (term) {
      console.log("terminal has gained focus");
    },

    onBlur: function () {
      console.log("terminal has lost focus");
    },
  });
});

// ---------------------------- STAR WARS

var frames = [];
var LINES_PER_FRAME = 14;
var DELAY = 67;

initStarWars = function (term) {
  if (frames.length == 0 && play == false) {
    term.echo("Loading...");
    $.getScript("js/star_wars.js").done(function () {
      play = true;
      var lines = star_wars.length;
      for (var i = 0; i < lines; i += LINES_PER_FRAME) {
        frames.push(star_wars.slice(i, i + LINES_PER_FRAME));
      }

      playStarWars(term);
    });
  } else {
    // frames have already been loaded
    play = true;
    playStarWars(term);
  }
};

playStarWars = function (term, delay) {
  var i = 0;
  var next_delay;
  if (delay == undefined) {
    delay = DELAY;
  }

  function display() {
    if (i == frames.length) {
      i = 0;
    }

    term.clear();

    if (frames[i][0].match(/[0-9]+/)) {
      next_delay = frames[i][0] * delay;
    } else {
      next_delay = delay;
    }
    term.echo(frames[i++].slice(1).join("\n") + "\n");
    if (play) {
      setTimeout(display, next_delay);
    } else {
      term.clear();
      i = 0;
    }
  }

  display();
};

// Thank you - come again.
