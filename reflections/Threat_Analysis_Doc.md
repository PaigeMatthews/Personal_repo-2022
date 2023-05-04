Scope - this lays the foundation for success by outlining goals, what's to be covered in the threat assessment and what is required to perform a successful threat assessment. This should provide a clear roadmap for what a successful threat analysis looks like and what's involved at every stage.
Processes and Procedures - these fortify the approach with tangible tools and process and procedures to perform the threat analysis.
Defining a rating system for threats can communicate the severity of threats, risks and vulnerabilities to all key stakeholders in an easy to understand format. This can also help the organisation to categorize, report and monitor threats after the threat analysis is performed.

### Threat analysis for a booking system
#### Assets within a booking system
The use of an API to avoid the ability to go directly into the database to view, read or delete any information.

#### The information at risk in a booking system
Any and all of the customers information, including names and contact information.
Where certain people are staying at certain times.
If a third party isn't used for withholding debit/credit card details then people's card details and/or the hotel's card details.

#### What are the risks with this information
Internalised risks by the hotel staff using it, this can be remedied with the use of the api commands and the hotel staff not being able to access the database at anytime and only being able to pull documents for peoples bookings with passwords and hash-encrypting any and all passwords and sensitive information.
