# What is an API?

web API is a collection of ways or rules for interacting with a web application’s data, often through an HTTP request-response cycle.

# Authorization and Authentication

Authentication is the process of validating the identity of a user. 

Authorization controls which users have access to which resources and actions

# What is JSON?

JSON is a popular, language-independent, standard format for storing and exchanging data.

<img width="1325" height="678" alt="image" src="https://github.com/user-attachments/assets/8d0435aa-0ab9-4617-8837-882f34176b3f" />

# The URL Module

const URL_TO_PARSE = 'https://www.example.com/p/a/t/h?prop1=value1&prop2=value2';

const myUrl = new URL(URL_TO_PARSE);

const hostname = myUrl.hostname;

const pathname = myUrl.pathname;

const searchParams  = myUrl.searchParams ;

