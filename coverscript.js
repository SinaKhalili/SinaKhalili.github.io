document.getElementById("user").value = `
{
	"name": "Sina",
	"lname": "Khalili",
	"major": "computer science",
	"skills": {
		"c": "I have extensive c experience from both inside the classroom as well as on the side. I've created various kernel modules, algorithm implementations, as well as wrote my own liquid dispensing robot.I always try to follow the K & R guidelines as well as write clean and maintainable code.",
		"haskell": "Haskell is one of my favorite language and I have spent more hours than I can count creating various algorithms and modules for it in emacs.I 'm a huge proponent of the functional programming paradigm and I am always excited to see it being used in industry.",
		"c++": "C++ is fast."
	}
}`

document.getElementById("company").value =`{
    "cname": "ACD Systems International"
}`

document.getElementById("cvTemplate").value = "\nHello <company>, my name is <name> <lname> and I love what you are doing. I'm a <major> student and I'm devoted to becoming the best coop I can be. I think that <company> is doing some real innovative work and I would love to be a part of it and work hard on making the <company> vision a reality as well as create a learning opportunity for myself. \n\nI think I would be a good fit for this position as I have experience with <matchedskills>. <skillsentences> \n\nThank you for taking the time to read through my application. I look forward to working with <company> in the future! \n Cheers, \n <name> <lname>"

document.getElementById("requirements").value   =`Hey look, I'm an example requirements document! Delete me!

For this fake job, I expect you to able to code in C as well as clojure. By the way if you know Haskell, that is good too. 

Yadda yadda yaddda yadda

We hope to hear from you soon!`

function makeCoverLetter(){
    let full_sentence = document
    .getElementById("requirements")
    .value.toLowerCase()
    .replace(/(\r\n|\n|\r|,|:|\.|\/|<|>)/gm, " "); // Replace every seperator with spaces (needed for matching later)

    
    console.log(full_sentence)
    console.log(document.getElementById("user").value)
    let userObj = JSON.parse(document.getElementById("user").value)
    let companyObj = JSON.parse(document.getElementById("company").value)
    let coverBegin = document.getElementById("cvTemplate").value
    // Needs to be sorted for the longest-match alg 
    let keysO = Object.keys(userObj.skills).sort((a, b)=> b >  a);
    let matchedSkills = []
    keysO.forEach((val)=>
    {
        fscopy = full_sentence
        escapedVal = regexEscape(val)
        reg = new RegExp( '\ ' + escapedVal + '\ ','g')
        if (full_sentence.search(reg) != -1) {
            fscopy = fscopy.replace(reg, "")
            matchedSkills.push(val);
        }
    });

    // Regex escape function graciously taken from
    // https://stackoverflow.com/questions/4029109/javascript-regex-how-to-put-a-variable-inside-a-regular-expression
    function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    let last = matchedSkills.pop()

    let stringSkill = matchedSkills.join() + ", and " + last 
    matchedSkills.push(last)
    skillStrings = ""
    matchedSkills.forEach((val)=>{
        console.log(val)
        skillStrings += userObj.skills[val] + " "
    });

    // BEGIN MAKING THE COVER LETTER 

    // Replace the company with the actual company
    coverBegin = coverBegin.replace(/<company>/g, companyObj.cname)
    coverBegin = coverBegin.replace(/<name>/g, userObj.name)
    coverBegin = coverBegin.replace(/<lname>/g, userObj.lname)
    coverBegin = coverBegin.replace(/<major>/g, userObj.major)
    coverBegin = coverBegin.replace(/<matchedskills>/g, stringSkill)
    coverBegin = coverBegin.replace(/<skillsentences>/g, skillStrings)

    document.getElementById("newCover").value = coverBegin;
}

makeCoverLetter()