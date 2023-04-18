import './App.css';
import CV from './Components/CV';
import Footer from './Components/Footer';
import ID from './Components/ID';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import rabinsonPic from './Components/userImage/robinson.png';
import johnbenPic from './Components/userImage/johnben.jpg';
import yencattyPic from './Components/userImage/yencatty.jpg';
import alhabibiPic from './Components/userImage/alhabibi.jpg';

function App() {
  const userAccounts = [
    {
      ID: 101,
      Name: "Robinson",
      Phone: "01234567890",
      Img: rabinsonPic,
      Email: "robinson@example.com",
      Pasword: "qweqwert",
      Address: "Los, USA",
      Institute: "UIST",
      Degree: "BBA",
      Skill1: "Computer",
      Skill2: "Marketing",
      Skill3: "Sales"
    },
    {
      ID: 102,
      Name: "JohnBen",
      Phone: "11234567892",
      Img: johnbenPic,
      Email: "johnben@example.com",
      Pasword: "qwerttrewq",
      Address: "Toronto, Canada",
      Institute: "AUT",
      Degree: "CE",
      Skill1: "Construction",
      Skill2: "Architecture",
      Skill3: "SelfService"
    },
    {
      ID: 103,
      Name: "YenCatty",
      Phone: "31234567894",
      Img: yencattyPic,
      Email: "yencatty@example.com",
      Pasword: "asddsaad",
      Address: "Tokyo, Japan",
      Institute: "SUAT",
      Degree: "CSE",
      Skill1: "Computer",
      Skill2: "Coding",
      Skill3: "Graphics"
    },
    {
      ID: 104,
      Name: "AlHabibi",
      Phone: "51234567896",
      Img: alhabibiPic,
      Email: "alhabibi@example.com",
      Pasword: "asdfgasd",
      Address: "Casablanca, Morocco",
      Institute: "CIIT",
      Degree: "EEE",
      Skill1: "Computer",
      Skill2: "Electronics",
      Skill3: "CAD"
    }
  ]

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginAccount, setLoginAccount] = useState('');

  const [loginAccountID, setLoginAccountID] = useState('');
  const [loginAccountName, setLoginAccountName] = useState('');
  const [loginAccountPhone, setLoginAccountPhone] = useState('');
  const [loginAccountImg, setLoginAccountImg] = useState('');
  const [loginAccountEmail, setLoginAccountEmail] = useState('');
  //const [loginAccountPassword, setLoginAccountPassword] = useState('');
  const [loginAccountAddress, setLoginAccountAddress] = useState('');
  const [loginAccountInstitute, setLoginAccountInstitute] = useState('');
  const [loginAccountDegree, setLoginAccountDegree] = useState('');
  const [loginAccountSkill1, setLoginAccountSkill1] = useState('');
  const [loginAccountSkill2, setLoginAccountSkill2] = useState('');
  const [loginAccountSkill3, setLoginAccountSkill3] = useState('');

  const login = () => {
    let f = 0;
    for (let i = 0; i < userAccounts.length; i++) {
      if (userAccounts[i].Email === loginEmail && userAccounts[i].Pasword === loginPassword) {
        f = 1;

        setLoginAccount(i);

        setLoginAccountID(userAccounts[i].ID);
        setLoginAccountName(userAccounts[i].Name);
        setLoginAccountPhone(userAccounts[i].Phone);
        setLoginAccountImg(userAccounts[i].Img);
        setLoginAccountEmail(userAccounts[i].Email);
        //setLoginAccountPassword(userAccounts[i].Pasword);
        setLoginAccountAddress(userAccounts[i].Address);
        setLoginAccountInstitute(userAccounts[i].Institute);
        setLoginAccountDegree(userAccounts[i].Degree);
        setLoginAccountSkill1(userAccounts[i].Skill1);
        setLoginAccountSkill2(userAccounts[i].Skill2);
        setLoginAccountSkill3(userAccounts[i].Skill3);
        break;
      }
    }
    if (f === 0) {
      alert("login failed");
    }
    else {
      alert("login successfull");
    }
  }

  const logout = () => {

    setLoginEmail('');
    setLoginPassword('');

    setLoginAccount('');

    setLoginAccountID('');
    setLoginAccountName('');
    setLoginAccountPhone('');
    setLoginAccountImg('');
    setLoginAccountEmail('');
    //setLoginAccountPassword('');
    setLoginAccountAddress('');
    setLoginAccountInstitute('');
    setLoginAccountDegree('');
    setLoginAccountSkill1('');
    setLoginAccountSkill2('');
    setLoginAccountSkill3('');

    alert("Thanks for choosing us. See you soon...")
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar loginAccount={loginAccount} logout={logout} />}>
            <Route index element={<Login loginEmail={loginEmail} loginPassword={loginPassword} setLoginEmail={setLoginEmail} setLoginPassword={setLoginPassword} login={login} loginAccount={loginAccount} />} />
            <Route path="cv" element={loginAccount !== '' && <CV Name={loginAccountName} Phone={loginAccountPhone} Email={loginAccountEmail} Address={loginAccountAddress} Img={loginAccountImg} Institute={loginAccountInstitute} Degree={loginAccountDegree} Skill1={loginAccountSkill1} Skill2={loginAccountSkill2} Skill3={loginAccountSkill3} />} />
            <Route path="id" element={loginAccount !== '' && <ID Institute={loginAccountInstitute} Img={loginAccountImg} Name={loginAccountName} ID={loginAccountID} Program={loginAccountDegree} Phone={loginAccountPhone} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
