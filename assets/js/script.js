
//FONT STYLE
function fStyle(style) {
  document.execCommand(style);
  }
 
  //FONT COLOR
function fColor(color) {
  document.execCommand( "foreColor", false, color );   
  }



//FONT BACKGROUND COLOR
function bColor(color) {
  document.execCommand( "backColor", false, color );   
  }
       
//JUSTIFY TEXT/
function justify(align) {
  document.execCommand( align, false, "" );  
  }

// INSERT UL OR OL
function list(listType) {
  document.execCommand( listType, false, "" );  
  }

// CHANGE FONTSIZE
function fSize(size) {
  document.execCommand( "fontSize", false, size );  
  }


// CHANGE HEADING
function hStyle(headingStyle) {
  document.execCommand( "heading", false, headingStyle );  
  }



// CHANGE FONT STYLE
function fName(fontType) {
  document.execCommand( "fontName", false, fontType ); 
  }


//TOGGLE BETWEEN SHOW AND HIDE EDITING OPTIONS
function options(id) {
    document.getElementById(id).classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches( '.fas')) {
      var dropdowns = document.getElementsByClassName("content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  //EXPORT TO DOC
  function Export2Doc(element, filename = ''){
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById(element).innerHTML+postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = filename?filename+'.doc':'document.doc';
    
    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
}
var doc = new jsPDF();
//EXPORT TO PDF
function Export2PDF(element, filename = '') {
  // R??cup??ration du contenu HTML
  var html = document.getElementById(element).innerHTML;

  // Initialisation de la biblioth??que jsPDF
  var doc = new jsPDF();

  // Ajout du contenu HTML au document PDF
  doc.fromHTML(html, 15, 15, {
    'width': 170
  });

  // Sp??cification du nom de fichier
  filename = filename ? filename + '.pdf' : 'document.pdf';

  // Enregistrement du document PDF
  doc.save(filename);
}



// Enregistrement du texte dans le local storage
function saveText(text) {
  localStorage.setItem("savedText", text);
}

// R??cup??ration du texte enregistr?? dans le local storage
function getSavedText() {
  return localStorage.getItem("savedText");
}

// Affichage du texte sur une autre page
function displayText() {
  var savedText = getSavedText();
  document.getElementById("displayArea").innerHTML = savedText;
}

// Suppression du texte enregistr?? dans le local storage
function deleteText() {
  localStorage.removeItem("savedText");
}
