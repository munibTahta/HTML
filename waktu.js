
                    var tanggal = new Date();
                    var thn = tanggal.getFullYear();
                    var bln = tanggal.getMonth();
                    var hr = tanggal.getDay();
                    var tgl = tanggal.getDate();
                    var namahr = new Array("Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu");
                     var namabln = new Array ("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember");
                    document.write(namahr[hr]+", "+tgl+" "+namabln[bln]+" "+thn);