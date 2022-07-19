# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby? 

Your answer: A hash in Ruby is the equivalent of an object in JavaScript. Hashes hold collections of data. Like objects, hashes have a name and any number of key-value pairs. Hashes can be manipulated in that they can be read once created, updated, and have content deleted within them. For example, we have a hash named celebrity_crush consisting of 3 key-value pairs name:"Nicole Beharie", occupation: "actress", and favorite_attribute: "smile". If we wanted to return/read the content within the hash we would call on the hash and key you want returned and print it.

   celebrity_crush = {name: "Nicole Behaire", occupation: "actress", favorite_attribute: "smile"}

    p celebrity_crush {:name}

The output for this would be "Nicole Behaire". 
We can update the hash as well. If we wanted to add a key-value pair we would list the hash name then inside brackets list the new key name add and assignment operator and then inside another bracket list the value. 

    celebrity_crush [:spouse] = ['Me...duh!']

We can also change exisiting key value pairs.  

    celebrity_crush [:favorite_attribute] = ['effortless beauty']

Lastly, we can delete content in the hash. We can do this by listing the hash name, using .delete, and within parentheses list the content you want to delete. 

    person.delete(:spouse)

Hashes can also be iterated on which means methods like .each and .map can be used on them.

Researched answer: Hashes are a collection of key-value pairs. They are similar to an array but they differ in that while arrays base their indexes from numbers, hashes uses any data type like symbols or arrays. The main purpose for a hash is to be able to look up values by their corresponding key. Hashes have a default value of nil, so when you call for a key that do not exist within the hash you will receive the output of nil. Hashes can easily be created. You can either create them using a .new method,

celebrity_crush = Hash.new 

, or implicitly by just creating the hash with a name and a list of key-value pairs separated by commas,

celebrity_crush = {name: "Nicole Behaire", occupation: "actress", favorite_attribute: "smile"}




2. What is a gem?

Your answer: A gem is a package manager the works for Ruby much like how yarn works for JavaScript in that is contains code that can be shared amongst developers.  

Researched answer: A gem in ruby is a an open source library of code that is meant to be shared and used by developers within their programs. Their are a great number of gems, Rspec and Rails are examples of 2 gems. These libraries canbe found public repositories like RubyGems.org. and GitHub.

3. What is Ruby on Rails?

Your answer: Ruby on Rails is a open-source framework that works with the ruby language. The way rails is structured is based off of MVC structure short for model, veiw, controller. The model being the database, the veiw being all on the content being veiwed by users (HTML, CSS, JavaScript), and the controller the director tell all the data where to go. 

Researched answer: Ruby on Rails is a MVC framework used for web applications. MVC stands for Model Veiw Controller and is a way to organize code. The Model part for MVC is the database layer and holds data like lists and corresponding attributes. The Veiw of MVC is the code for user interface so this is all of the HTML, JavaScript, and CSS. The controller is the brains of the framework. It takes the inputs from the user interaction and dictates what should happen with the view and model portions.

4. What is a relational database? Are there other kinds of databases? 

Your answer: relational datatbases are similar to excel spread sheets. They hold information in different rows and columns. 

Researched answer: Relational databases are a type of database that can store data in a table much like an excel spreadsheet. Information is stored in each row of the table and gieven a unique identifier also know as a primary key. With this given key relational databases can access data that is related to eachother. 

5. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifiers for every instances within a model. These are important when being able to call on specific instances

Researched answer: Primary Keys occupy the first colum of the model. They are an identifier for every row or instance within the model table. They are important because they can be used to access related information within relational databases. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:

2. JSON:

3. ERB:

4. Params:

5. API:
