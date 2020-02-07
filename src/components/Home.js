import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <MyDiv>
    
    <div>

      <h1> Prisoner Skills</h1>
    </div>
      <h2>Recruit skilled candidates, whilst helping their rehabilition</h2>

      <h2>Mission Statement</h2>
      <h3>
        Prisoner skills is a rehabilitation focused venture, aimed at mutualy
        benefiting both inmates and potential employers. Low risk individuals
        are helped to maintain their skills, realise their full potential whilst
        giving back to the community by utilising their skills in a meaningful
        way. It gives a sense of purpose that is so often missing and may help
        them find work beyond their sentence. it also benefits the community and
        potential employers, as vital skills are not lost for the duration of
        the sentence whilst in the prison system{" "}
      </h3>

      <h1> How does it work? </h1>
      <h3>
        {" "}
        Only willing inmates, vetted for safety and serving time for non violent
        offenses are considered. This is a not for profit scheme which matches
        suitable candidates with appropriate industry or business. The inmate
        recieves a fair wage for a fair work. Programme re-intergration outreach
        helping society accomplish participate pride goals self-respect salary
        release PITCH Pitch: This app allows prison management to broadcast the
        skill of inmates to make better use of their time using their skills to
        make a wage and becoming more employable after prison. MVP This app
        contains two user types. A prison admin (who has the ability to log in)
        and a single user (no need to log in so no need for user data to be
        persisted on this user type) who can view posted profiles by prison.
        Home Page (For potential employer) - No need to log in. Contains a list
        of prisons who have posted prisoner profiles. Each prison is laid out in
        a grid format, with the name of the prison, number of people available
        to work (total number of entries a given prison admin has submitted),
        and the physical address/location of the prison. Clicking on a prison
        takes you to the prisoner profile page. Prisoner Profile page: Accessed
        from the home page, non-logged in users can view the list of profiles
        created by the prison they clicked on. Single Profile Page: Users can
        click on a single post to read more of the description. Home Page (For a
        prison) - If no profile is created, be sure to allow a prison to create
        a profile and add it to the list of prisons on the general home page.
        After an admin logs in, they are directed to a page where they can see
        the people’s profiles they’ve created in a list view, and have options
        to create new one. Create profile page: An admin can create a prisoner’s
        profile. Should include name, availability (permissions to work in
        prison only or able to have work leave), and list of skills and/or
        previous work experience. The profile can be edited and deleted after
        creation.
      </h3>

      <footer>
        <p>Copyright 2020. Prison Skills</p>
      </footer>
 
    </MyDiv>
  );
};

export default Home;

const MyDiv = styled.div`
margin: 0 auto;
border: 1px, solid, #0088DD;

h1 {
  color:#001a33;
  margin-top: 18px;
  text-align: center;
}
div {
  
  background: lightgrey;
  border: 1px solid #0088DD;
  padding: 20px;
  height: 200px;
  background-image:  url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYNxGWOLyzDUMSx1DQLopS0tHGfGZslMmPj2MhtFc_Ck-gwXWP") 
}
h2:hover {
  color: red;
}
p {
  font-weight: bolder;
  font-size: 19px;
}
`;