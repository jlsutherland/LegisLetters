/*jshint browser:true, camelcase: false*/
/*globals $*/
$(window).load(function () {
  $('.facet-view-simple').facetview({
    search_url: '/elasticsearch/legisletters/letter/_search',
    datatype: 'json',
    search_button: true,
    fields: ['text', 'letterDate', 'url', 'signatures', 'recipients',
      'hostLegislator', 'pressDate', 'pdfs'],
    result_display: [ [
      { "pre" : "<strong>",
        "field": "hostLegislator",
        "post" : "</strong><br><br>"},
      { "field": "text" }
    ] ],
    results_render_callbacks: {
      "text": function (record) {
        var $link = $('<a target="_blank" />'),
            text,
            link;
        $link.attr('href', record.url[0]);
        $link.text('(See original)');
        link = $('<div />').append($link).html();
        if (record._highlight) {
          if (record._highlight.text) {
            return '...' + record._highlight.text.join('... ') + '... ' + link;
          }
        }
        if (record.text) {
          text = record.text[0].split(/\s+/).slice(0, 40).join(' ') + '...';
        } else {
          text = '<i>PDF only</i>';
        }
        return text + ' ' + link;
      }
    },
    search_sortby: [{
      field: 'letterDate',
      display: 'Letter Date'
    }, {
      field: 'hostLegislator',
      display: 'Legislator'
    }],
    searchbox_fieldselect: [
   //   {
   //   field: 'hostLegislator',
   //   display: 'Legislator'
   // },
    {
      field: 'text',
      display: 'Letter Text'
    }],
    facets: [
    //{
    //  'field': 'letterDate',
    //  "type": "date_histogram",
    //  "display": "Letter Date",
    //  "sort": "desc",
    //  "interval": "month"
    //},
    {'field': 'hostLegislator', 'display': 'Legislator'}
      //{'field': 'signatures'}
      //{'field': 'publisher.exact', 'size': 101, 'order':'term', 'display': 'Publisher'},
      //{'field': 'author.name.exact', 'display': 'author'},
      //{'field': 'year.exact', 'display': 'year'}
    ]
  });
});

      //{'field': 'text', 'exclude': ["the","to","and","of","in","a","that","for","this","you","is","with","as","on","are","we","have","by","your","be","has","from","it","an","these","not","our","sincerely","will","or","at","their","would","more","which","other","its","all","if","been","also","ensure","provide","any","urge","than","while","should","thank","can","they","such","was","about","including","but","new","work","who","many","write","one","united","know","so","were","year","over","may","important","under","no","time","only","department","act","look","there","regarding","make","well","some","years","could","those","efforts","use","must","ask","into","when","do","1","i","issue","address","continue","believe","since","matter","how","further","what","process","attention","through","take","critical","significant","made","working","country","both","states","forward","support","request","u.s","state","federal","recent","congress","government","american","information","law","public","national","administration","writing","against","help","given","need","additional","during","long","current","however","most","concerns","without","response","consideration","future","them","out","two","does","policy","last","action","between","protect","us","first","because","whether","million","across","services","used","number","appreciate","already","understand","before","had","full","people","service","order","concerned","recently","now","issues","concern","being","report","following","strong","consider","addition","up","like","impact","within","2","3","4","5","6","7","8","9","even","possible","office","system","part","clear","after","review","percent","necessary","program","please","based","several","americans","actions","serious","questions","plan","officials","families","committee","fully","end","according","proposed","three"]},
//function renderResultRecord(options, record) {
//  debugger;
//  var el = "<tr><td></td></tr>";
//  return el;
//}

/*
-        facets: {
  -            text: {
    -                terms: {
      -                    field: "text",
      -                    size: 0
      -                }
      -            },
      -            letterDate: {
        -                date_histogram : {
          -                    field : "letterDate",
          -                    interval : "month"
          -                }
          -            },
          -            recipients: {
            -                terms: {
              -                    field: "recipients",
              -                    size: 0
              -                }
              -            },
              -            hostLegislator: {
                -                terms: {
                  -                    field: "hostLegislator",
                  -                    size: 0
                  -                }
                  -            },
                  -            signatures: {
                    -                terms: {
                      -                    field: "signatures",
                      -                    size: 0
                      -                }
                      -            }
                      -            /*
                      -            name: {
                     -                terms: {
                    -                    field: "name"
                   -                }
                  -            },
                 -            group: {
                -                terms: {
               -                    field: "groups.name",
              -                },
             -                nested: "groups"
            -            },
           -            city: {
          -                terms: {
         -                    field: "addresses.city"
        -                },
       -                nested: "addresses"
      -            },
     -            country: {
    -                terms: {
   -                    field: "addresses.country"
  -                },
 -                nested: "addresses"
-            },
-            createdAt: {
-                date_histogram : {
-                    field : "createdAt",
-                    interval : "day"
-                }
-            }
*/
