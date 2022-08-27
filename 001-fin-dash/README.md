# Web UI Challenge - Financial Dashboard

The goal of this challenge is to build a Web UI as quickly as possible. Given
a design, typically pulled from Dribbble, attempt to build out as much of the
design within one hour with the following constraints:

- Time yourself for 15 minutes of planning the engineering work.
- Time yourself for 1 hour of implementation


## The Design

In this challenge, I attempted to build out as much of [this dribbble design](https://dribbble.com/shots/19026903-Onpay-Financial-Dashboard) as possible -- a basic financial dashboard for viewing one's finances and spending.

![original-4e18c09dcab99c548ad2fa3887c2d630](https://user-images.githubusercontent.com/97349968/187040896-640f8c48-7c6e-46f0-9af0-51199e7bdad2.png)

## The Implementation

A screenshot of the web app after an hour of development:

<img width="1728" alt="Screen Shot 2022-08-27 at 12 03 45 PM" src="https://user-images.githubusercontent.com/97349968/187040921-abf0ee19-ec2c-4e79-a83c-c12ef687009f.png">

## Discussion

I was able to bootstrap the initial progress by using [Create React App](https://create-react-app.dev/) and [Material UI](https://mui.com/). Almost 100% of the work over the hour involved flex box layouts and building out component skeletons; I was not able to dive into the UI details of the page. This makes me think that if I am to develop UI's faster, **something to aid in development would be some basic React Utils for navigating typical flexbox layouts with much less boilerplate. This is something I'd like to follow-up with before the next challenge.**

Because I was so consumed with basic layout concerns, I was not able to think through proper code reusability and utilizing material UI's advanced style sharing capabilitie. The main point of these exercises is to get more efficient at building production-ready UI's, so I need to make sure that I can do this in a way that scales across the lifetime of an app / UI system. A helpful follow-up here might be to do some initial work on building out boilerplate theming code, so I can easily substitute theme values such as spacing and colors when starting an app.**

Finally, I generally have questions / concerns about importing custom packages into the "create react app" generated code. This is something I've had trouble with in the past, and I'm wondering if there's some quirks with how the "Create React App" boilerplate interops with npm workspaces. **This is another thing I'd like to investigate more before doing the next exercise.**


