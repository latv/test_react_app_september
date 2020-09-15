import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
        <div className="App">
      <header class="header">


    <div class="banner-img">
      
        <img src="./assets/img/Union.svg" class="Union" alt=""></img>
        <img src="./assets/img/BlackLogo 3.jpg" class="blackLogo"></img>

    </div>
    <div class="wraper">
        <nav>
            <ul>
           
                <li class="idea"><a href="#">Ideja</a></li>
                <li class="piesakiSapni"><a href="#">Piesaki sapni</a></li>
                <li class="uznemeji"> <a href="#">Uzņēmējiem</a></li>
                <li class="sapnuBanka"><a href="#">Sapņu banka</a></li>
                <li class="sapnuAtbalsts"><a href="#">Sapnu Atbalsts</a></li>
                <li class="iedvesmuStasti"><a href="#">99 iedvesmu stāsti</a></li>
            </ul>
        </nav>
    </div>
    <h1 class="lang">LV</h1>
    {/* <!-- <img src="assets/img/Rectangle 39.png" class="rectangle" alt=""> --> */}
    </header>
    <img src="assets/img/Sparkle Video 1.png" alt=""></img>
    <img class="playButton" src="assets/img/Vector (1).png" alt=""></img>
    <h1 class="text-1">SparkleHeart ir biedrība, kas radīta, lai palīdzētu cilvēkiem piepildīt pat pārdrošākos sapņus. Šeit satiekas sapņotāji un viņu atbalstītāji - uzņēmumi, kas sniedz palīdzīgu roku, lai kopā pasauli padarītu par labāku vietu mums visiem.Mēs esam gatavi
    palīdzēt Tev piepildīt sapni. Kā pamats iedvesmai - tiek radīti arī 99 stāsti par Latvijas sievietēm.
    </h1>

    <div class="pictures">
      <img class="zanda" src="assets/img/Zanda_1.jpg" alt=""></img>
      <img src="assets/img/Sibilla_4.jpg" alt="" class="picture_4"></img>
      <img class="meita" src="assets/img/Brinuma_meita-15.jpg" alt=""></img>
      <img src="assets/img/Alina_1 1.jpg" class="Alina_1"></img>
      <img src="assets/img/Anda_2 1.jpg" alt="" class="anda"></img>
    </div>
    <div>
    <h1 class="text-2">VĒLIES PIEPILDĪT SAVU SAPNI?</h1>
    <h1 class="text-3">VĒLIES PALĪDZĒT KĀDĀM PIEPILDĪT SAPNI?</h1>
    </div>
    <div>
    <button class="button-1">Sapņotājiem</button>
    <button class="button-2">Uzņēmējiem</button>
    </div>
    <h1 class="text-4">SAZINĀTIES AR MUMS</h1>
    <div class="form">
    <input type="text" class="form-control-input-1" placeholder="Vārds, uzvārds"></input>
    <input type="text" class="form-control-input-2" placeholder="E-pasts"></input>
    <input type="text" class="form-control-input-3" placeholder="Telefons"></input>
    <input type="text" class="form-control-input-4" placeholder="Jautājums, vai komentārs*"></input>
    <h1 class="importantText">* obligāti aizpildāmie lauki</h1>
    <input type="checkbox" class="checkboc"></input>
    <h1 class="text-5">Piekrītu, ka mani dati tiks izmantoti likumdošanā noteiktā kārtībā un tiks saglabāti līdz brīdim, kamēr tas būs nepieciešams.</h1>
    <button class="button-3">Sūtīt</button>
    </div>
    <div class="atbalstitaji">
    <img src="assets/img/Union.png" class="union" alt=""></img>
    <h1 class="suporters">ATBALSTĪTĀJI</h1>
    <img src="assets/img/getlogo 1.png" alt="" class="logo1"></img>
    <img src="assets/img/Group.png" alt="" class="logo2"></img>
    <img src="assets/img/Citybee-logo 1.png" alt="" class="logo3"></img>
    <img src="assets/img/logo2.png" alt="" class="logo4"></img>

    </div>
    <footer class="footer">
    <img src="assets/img/Union2.png" alt="" class="background"></img>
    <img src="assets/img/GoldenV2Logo 3.png" alt="" class="sparkleLogo"></img>
    <h1 class="copyRight">© SparkleHeart 2020. Visas tiesības aizsargātas.</h1>
    <h1 class="idea2">Ideja</h1>
    <h1 class="piesakiSapni2">Piesaki Sapni</h1>
    <h1 class="uznemeji2">Uzņēmējiem</h1>
    <h1 class="sapnuBanka2">Sapņu banka</h1>
    <h1 class="SapnuAtbalsta2">Sapņus atbalsta</h1>
    <h1 class="iedvesmasStasti2">Iedvesmas stāsti</h1>
    <h1 class="biedriba">Biedrība SparkleHeart</h1>
    <h1 class="registresana">Reģistrācijas nr. 40008293119</h1>
    <h1 class="banka">Banka: SWEDBANK A/S</h1>
    <h1 class="bankasNr">LV52HABA0551047652465</h1>
    <h1 class="name">Juris Gogulis</h1>
    <h1 class="contactEmail">juris.gogulis@sparkleheart.org</h1>
    <h1 class="telephone">+37126890034</h1>
    <h1 class="adress">Biķernieku iela 24a - 5, LV-1006</h1>
    <img src="assets/img/facebook.png" alt="" class="facebook"></img>
    <img src="assets/img/instagram.png" alt="" class="instagram"></img>
    <h1 class="politika">Privātuma politika</h1>
    </footer>
    </div>
  );
}

export default App;
