function pendaftaran()
        {
            var formulir = document.forms["formulir"];
            var kolom1 = formulir.elements["kolom1"].value;
            var kolom2 = formulir.elements["kolom2"].value;
            var kolom3 = formulir.elements["kolom3"].value;
            var kolom4 = formulir.elements["kolom4"].value;
            var kolom5 = formulir.elements["kolom5"].value;
            var kolom6 = formulir.elements["kolom6"].value;
            var kolom7 = formulir.elements["kolom7"].value;
            var kolom8 = formulir.elements["kolom8"].value;
            var kolom9 = formulir.elements["kolom9"].value;



            if (kolom1 == "")
                {
                    confirm("input nama salah");
                }
            else if (kolom2 == "")
                {
                    confirm("input tanggal lahir salah ");
                }
            else if (kolom3 == "")
                {
                    confirm("input alamat salah");
                }
            else if (kolom4 == "")
                {
                    confirm("input No.Telp/HP salah");
                }
            else if (kolom5 == "" || formulir.kolom5.value.indexOf('@',0,'.')==-1)
                {
                    confirm("input E-mail salah");
                }
            else if (kolom6 == "")
                {
                    confirm("Anda belum mengisi kolom Asal Sekolah");
                }
            else if (kolom7 == "")
                {
                    confirm("Anda belum mengisi kolom Nama Orang Tua");
                }
            else if (kolom8 == "")
                {
                    confirm("Anda belum mengisi kolom Alamat Orang Tua");
                }
            else if (kolom9 == "")
                {
                    confirm("Anda belum mengisi kolom Pekerjaan Orang Tua");
                }
            else
                {
                    window.open("berhasil.html");                
                }        
        }