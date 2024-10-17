import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "./../aset/front1.jpg";
import jurusan2 from "./../aset/back1.jpg";
import jurusan3 from "./../aset/dkv.jpg";
import kegiatan1 from "./../aset/futsal.jpg";
import kegiatan2 from "./../aset/kerja.jpg";
import kegiatan3 from "./../aset/lari.jpg";
import kegiatan4 from "./../aset/panas.jpg";

const Maincontent = ()=>{
    return (
        <div>
          <Hero/>
          <div className="container">
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>Jurusan Sekolah</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan1} jurusan="Front End Developer" />
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan2} jurusan="Back End Developer" />
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan3} jurusan="Desain Komunikasi Visual"  />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan1} desc="Ini adalah kegiatan futsal bulanan"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan2} desc="kerja bakti setiap hari sabtu perpekan"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan3} desc="lari adalah rutinitas setiap hari saat pagi"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan4} desc="ini adalah pemanasan/steacing yang dilakukan pada waktu pagi setiap hari"/>
                    </div>
                    
                 </div>
            </div>
          </div>
        </div>
    )
}

export default Maincontent;