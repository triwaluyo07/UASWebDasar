function tampilDokter(dokter)
{
    ///Source kode untuk tampil kota
    var dktr= "";
    switch (dokter)
    {
        case "DokterUmum" :  {
                        dktr = "<ul> \
                        <li> Dr Arjianto </li>\
                        Bkok N,, Jl. Puri Anjasmoro, Tawangsari, Semarang Bar., Kota Semarang<br>\
                        +62 851-0011-4929 <br><br>\
                        <li> Dr Lestariningsih W.B. SpPD </li>\
                        Jl. Lamper Sari no 69 Semarang <br>\
                        024 8445239<br><br>\
                        <li> Dr Susilowati </li>\
                        Jl. Setia budi 2 162<br>\
                        024 8415685 <br><br>\
                        <li> Dr Mualif Muchya </li>\
                        Jl. Gunung Agung No 4 Semarang<br>\
                        0248313886<br><br>\
                        <li> Dr Tjipto Bahtera</li>\
                        Jl. Karang Bendo no 44 Semarang<br>\
                        024 8414001<br><br>\
                                </ul>";                        
                        }break;
        ///Data dokter umum dari https://dilokasi.com/Jawa-Tengah/Places/Praktek-Dokter-Umum-Dr-Ardjianto-879034

        case "DokterMata" :  {
                        dktr = "<ul> \
                        <li> dr Agustina Yusmawati SpM </li>\
                        Jl. Kawi Raya Candisari Semarang<br>\
                        +6224-8310076<br><br>\
                        <li> dr Maria Anastasia Srini SpM </li>\
                        Provider Rawat Inap Garda Medika Rs Elizabeh<br>\
                        +6224-8310076<br><br>\
                        <li> Dr dr Winarto SpM </li>\
                        Jalan pandanaran Semarang selatan Semarang<br>\
                        +62248442525<br><br>\
                        <li> dr Nika Bellarinatasari </li>\
                        Jalan Papandayan Gajahmungkur Semarang<br>\
                        +62248442525<br><br>\
                        <li> dr. Nanik Sri Mulyani SpM </li>\
                        RS Panti Wilasa Dr Cipto Semarang<br>\
                        081327114951<br><br>\
                                </ul>";                        
                        }break;
    ///Nama dokter mata dari http://id.dokdokter.com/id/cat/ophthalmologist/semarang-kota-semarang-jawa-tengah-indonesia
    
        case "DokterGigi" :  {
                        dktr = "<ul> \
                        <li> drg Lina P.Winardi </li>\
                        Provider Rawat Inap Garda Medika Rs Elizabeth<br>\
                        +6224-8310076<br><br>\
                        <li> drg L.Darto Witarso </li>\
                        Provider Rawat Inap Garda Medika Rs Elizabeth<br>\
                        +6224-8310076<br><br>\
                        <li> drg Stephanie Hadiyanto </li>\
                        Provider Rawat Inap Garda Medika Rs Elizabeh<br>\
                        +6224-8310076<br><br>\
                        <li> drg Th. Anggita </li>\
                        Provider Rawat Inap Garda Medika Rs Elizabeh<br>\
                        +6224-8310076<br><br>\
                                </ul>";
                        }break;
        ///Data dokter gigi dari http://id.dokdokter.com/id/cat/general-dentist/semarang-kota-semarang-jawa-tengah-indonesia
        
        case "DokterKulit" :  {
                        dktr = "<ul> \
                        <li> dr Djokko Susanto SpKK </li>\
                        Provider Rawat Inap Garda Medika Rs Elizabeth<br>\
                        +6224-8310076<br><br>\
                        <li> dr Buditjahjono SpKK </li>\
                        Provider Rawat Inap Garda Medika Rs Elizabeth<br>\
                        +6224-8310076<br><br>\
                        <li> dr Khunadi Hubaya SpKK </li>\
                        Provider Rawat Inap Garda Medika Rs Elizabeh<br>\
                        +6224-7605378 <br><br>\
                        <li> dr Paulus Yogyartono </li>\
                        Provider Rawat Inap Garda Medika Rs Elizabeh<br>\
                        +6224-8310076<br><br>\
                                </ul>";
                        }break;
        ///Data dokter kulit dari http://id.dokdokter.com/id/cat/dermato-venerelogy/semarang-kota-semarang-jawa-tengah-indonesia

        case "DokterBedah" :  {
                        dktr = "<ul> \
                        <li> Dr. Djoko Handojo, SpB SpB(K)Onk </li>\
                        Jl. Guntur 10 Semarang<br>\
                        081 6653 604<br><br>\
                        <li> Dr. H. Soebianto, SpB, SpB(K)Onk </li>\
                        Jl. Nangka Timur I/26 Smg<br>\
                        081 1298 776<br><br>\
                        <li> Dr. Benny Issakh, SpB, SpB(K)Onk </li>\
                        Jl. Batur No.11 Gajah Mungkur<br>\
                        081 1272 5659<br><br>\
                        <li> Dr. H. Darwito, SH, SpB(K)Onk </li>\
                        Jl. Waru Timur Raya 12 Banyumanik Semarang<br>\
                        081 326 744 770<br><br>\
                        <li> Dr. Eka Yudhanto, Msi, SpB(K)Onk </li>\
                        Jl. Primatama 76 - 77 Taman SetiaBudi Semarang<br>\
                        081 1290 319<br><br>\
                                </ul>";                        
                        }break;
        ///Data Dokter Bedah dari https://www.scribd.com/doc/154683830/Daftar-Nama-Dokter-Bedah-Rs-kariadi                        
        default : dktr = "";
    }
    document.getElementById('dktr').innerHTML = dktr;
}