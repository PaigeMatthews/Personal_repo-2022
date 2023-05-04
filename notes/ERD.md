
ERD (Enlity Relationship Diagram) depicts Entities, Attributes and the Relationships among them.

An Attribute describes the facts, details or characteristics of an Entity. Each Entity is made up of a number of Attributes which which represent that Entity. An Entity is a person, place, thing or concept about which data can be collected. In databases, entities are the subjects whose attributes are stored as records. Each Entity has a Primary Key (PK) to provide a unique reference to an Entity, which means that an Entity can be referenced in another table without having to call up all the details about that Entity.

One to One entity relationships work to have two entities correspond to each other.

Student to Student Number 

One to many entity relationships occur when one entity has many corresponding entities

Teacher to Students

Many to many relationships rarely occur and need to be resolved before being put into a Relational Database Management Systems can be resolved by using a new entity called a Record of Results.

Students to Subjects

Entities – distinct things of interest stored in tables

Attributes – characteristics of things of interests or entities

Relationships – the connections between things of interest

Resolving Relationships – ensuring there is logical connection between tables

-   Normalisation, organising data in a database
    
-   First Normal Form which 
    

-   defines very basic rules in the database.
    
-   removes repeating groups by flattening the table. 
    
-   creates compound keys which are made up of two or more fields to make a Primary Key (PK).
    
-   resolves insertion, update and deletion anomalies which happen when data is added, changed or removed from a table.
    
-   decomposes relationships by splitting tables into parts to avoid non-repeating groups.
    

prevents functional dependency or constraints on tuples (rows of unique data).

-   Second Normal Form (2NF) which 
    

-   removes compound Primary Keys so that there are no repeating attributes or group of attributes. 
    
-   ensures each non-key attribute is fully functionally dependent on the whole key.
    

  

-   Third Normal Form (3NF) which 
    

-   removes transitive functional dependencies which create redundancy in a database. 
    

looks at non-key fields or data that doesn’t relate to the Entity defined by the Primary Key.

![](https://lh3.googleusercontent.com/Xl0e5Pw5UjT0ubeD6jHWAMYJCb2LXzGstHmJI1yBYGY8jH91pWRFmxXfyd7TBwQMeq6CzpTzf4Gr-CMAl8gM-0mCbg4ThglHytwdOUa4KF5_v9RmjcjJ7Ggpm63seoJH9hDukBmoDKwkI7E00mFjK6bI7OzsSFYz)