import "./note.css";
import Link from "next/link";
function NoteCard() {
  return (
    <div className="noteCard">
      <div className="main-cat">
        {false ? "ভর্তি চলমান..." : "Admission Ongoing..."}
      </div>
      <h3 className="notehone" style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>
        <Link href="/classes/alemalema">
          {false ? "আলেম আলেমা" : "Alem Alema"}
        </Link>
      </h3>
      <h3 className="notehone" style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>
        <Link href="/classes/hifjulquran">
          {false ? "হিফজুল কুরআন" : "Hifzul Quran"}
        </Link>
      </h3>
      <h3 className="notehone" style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>
        <Link href="/classes/shishumaktab">
          {false ? "শিশু মক্তব" : "Child Maktab"}
        </Link>
      </h3>
      <h3 className="notehone" style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>{" "}
        <Link href="/classes/farzeayinnajera">
          {false ? "ফরজে আইন নাজেরা" : "Farze Ayin Nazera"}
        </Link>
      </h3>
      <h3 className="notehone" style={{ textAlign: "center" }}>
        <i className="fa fa-check"></i>{" "}
        <Link href="/abacus">{false ? "অ্যাবাকাস" : "Abacus Math"}</Link>
      </h3>
    </div>
  );
}

export default NoteCard;
