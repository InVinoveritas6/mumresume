import styled from "styled-components";

export const AppBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
`;

export const List1 = styled.div`
  position: relative;
  width: 850px;
  height: 1200px;
  margin: 100px 0;
  background: #ffffff;
  box-shadow: 0px 25px 35px grey;
`;

export const List1Body = styled.div`
  margin: 50px 50px 0px 60px;
`;

export const List1Header = styled.div`
  display: grid;
  grid-template-areas: "headerTitle headerPhoto" "headerAboutMe headerPhoto";
`;

export const List1HeaderTitle = styled.div`
  grid-area: headerTitle;
  margin: 0 40px 20px 0;
`;

export const List1HeaderTitleName = styled.div`
  text-transform: uppercase;
  font-size: 55px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const List1HeaderTitleProfession = styled.div`
  color: #9e988c;
  font-size: 25px;
`;

export const List1HeaderAboutMe = styled.div`
  grid-area: headerAboutMe;
  margin: 0 40px 20px 0;
`;

export const List1HeaderAboutMeTitle = styled.div`
  text-transform: uppercase;
  font-size: 30px;
`;

export const List1HeaderAboutMeText = styled.div`
  font-size: 20px;
`;

export const List1HeaderPhotoBlock = styled.div`
  grid-area: headerPhoto;
  margin-top: 40px;
`;

export const List1HeaderPhotoBorder = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid #9e988c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const List1HeaderPhoto = styled.div`
  width: 330px;
  height: 330px;
  margin-top: 10px;
  border-radius: 50%;
  background: url("./img/resumeFoto.jpg") no-repeat;
  background-size: contain;
`;

export const List1Info = styled.div`
display: grid;
grid-template-areas: "education skills" "experience language" "contacts contacts";
`;

///Education

export const List1InfoEducation = styled.div`
    grid-area: education;
`;

export const List1InfoEducationTitle = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  color: #b5ac9f;
  margin: 10px 0;

`;

export const List1InfoEducationBlock = styled.div`
 display: grid;
 grid-template-areas: "educationTime educationTitle" "educationTime educationText";
`;

export const List1InfoEducationBlockTime = styled.div`
grid-area: educationTime;
`;

export const List1InfoEducationBlockTitle = styled.div`
grid-area: educationTitle;
margin: 0 20px;


`;

export const List1InfoEducationBlockText = styled.div`
grid-area: educationText;
margin: 0 20px;

`;

///Skills

export const List1InfoSkills = styled.div`
    grid-area: skills;
`;

export const List1InfoSkillsTitle = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  color: #b5ac9f;
  margin: 10px 0;
`;

export const List1InfoSkillsBlock = styled.div`
    text-align: justify;
`;

///Experience

export const List1InfoExperience = styled.div`
    grid-area: experience;
`;

export const List1InfoExperienceTitle = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  color: #b5ac9f;
  margin: 10px 0;
`;

export const List1InfoExperienceBlock = styled.div`

`;

///Language

export const List1InfoLanguage = styled.div`
    grid-area: language;
`;

export const List1InfoLanguageTitle = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  color: #b5ac9f;
  margin: 10px 0;
`;

export const List1InfoLanguageBlock = styled.div`

& li {
  list-style-type: none;
}
`;

///Contacts

export const List1InfoContacts = styled.div`
position: absolute;
    bottom: 0;
    width: inherit;
    height: 140px;
    background: #e4d2c4;
`;

export const List1InfoContactsTitle = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  color: #ffffff;
  margin: 10px 0;
`;

export const List1InfoContactsBlock = styled.div`

`;



