// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
    db.User.bulkCreate([
    {
        picture: "http://placehold.it/32x32",
        username: "EstellaByers",
        email: "richard.rutledge@undefined.biz",
        phone: "+1 (853) 590-2625",
        about: "Consequat in nulla magna ut duis proident proident sit labore irure est minim cupidatat. Dolore nulla eiusmod do veniam pariatur velit irure minim ad cillum ut. Veniam officia duis amet minim culpa quis incididunt fugiat fugiat est eiusmod excepteur. Quis adipisicing magna ullamco irure velit consequat laborum proident. Dolore velit nulla excepteur dolor. Magna consequat laboris nostrud ad sit in velit est ut non in veniam.".slice(0,250),
      },
    {
        picture: "http://placehold.it/32x32",
        username: "CardenasNoble",
        email: "blanchard.graves@undefined.co.uk",
        phone: "+1 (818) 493-3142",
        about: "Ea sunt aute esse dolore ad pariatur laborum veniam dolor nisi consequat ullamco magna in. Tempor veniam esse ea anim excepteur aliquip est. Reprehenderit ut ex occaecat Lorem id sunt. Dolore consectetur pariatur culpa non ex amet ea culpa dolor aute et sit occaecat. Magna elit ex laborum ut elit officia ea voluptate dolor anim. Eiusmod ullamco voluptate qui cillum reprehenderit ut et officia nulla anim commodo laborum.".slice(0,250),
    },
    {
        picture: "http://placehold.it/32x32",
        username: "FlorenceSantos",
        email: "mindy.spence@undefined.net",
        phone: "+1 (915) 519-2274",
        about: "Consequat non duis ea ut laborum irure id nulla eu laborum. Id aliqua nulla adipisicing ut ea do nisi laboris id occaecat ipsum proident magna dolore. Ipsum quis ipsum occaecat dolore do laboris elit consectetur minim sit ea. Sunt ipsum Lorem laborum officia est et. Nisi nisi nulla nostrud officia adipisicing exercitation. Officia eu qui cupidatat et adipisicing ut nisi ullamco aliquip voluptate deserunt sit amet ex. Occaecat ut voluptate mollit laborum et non.".slice(0,250),
    },
    {
        picture: "http://placehold.it/32x32",
        username: "TaylorSummers",
        email: "gardner.burt@undefined.org",
        phone: "+1 (938) 541-3100",
        about: "Est ex eu consectetur sunt. Ipsum voluptate amet duis mollit. Dolore consequat exercitation id minim velit. Voluptate dolore incididunt velit ullamco cupidatat nostrud est commodo consectetur irure magna elit. Veniam eu cupidatat sunt ipsum minim excepteur minim et irure consectetur.".slice(0,250),
    }
    ]).then(function(response) {
    
    db.Listing.bulkCreate([
        {
          "title": "nulla sint enim ex",
          "username": "TaylorSummers",
          "body": "Adipisicing qui tempor fugiat deserunt exercitation excepteur quis. Commodo irure excepteur consectetur ullamco consequat. Fugiat id adipisicing reprehenderit dolor duis exercitation est reprehenderit esse.",
          "latitude": "-16.473745",
          "longitude": "-146.263346",
          picture: "http://placehold.it/32x32"
        },
        {
          "title": "ex veniam officia aute",
          "username": "TaylorSummers",
          "body": "Ipsum consectetur eu sint ea excepteur adipisicing velit in cupidatat. Nostrud exercitation nostrud velit laboris amet. Fugiat duis elit proident dolore sint ex. Ipsum ex incididunt consectetur ut fugiat ut ea in et enim reprehenderit nisi esse.",
          "latitude": "-73.325274",
          "longitude": "70.859031",
          picture: "http://placehold.it/32x32"
        },
        {
          "title": "proident minim magna incididunt",
          "username": "FlorenceSantos",
          "body": "Cillum proident deserunt fugiat consequat adipisicing ipsum id. Elit incididunt minim quis ullamco officia irure quis. Fugiat reprehenderit aliquip nostrud id irure in in nulla duis magna est eu cupidatat. Duis amet officia exercitation eiusmod ullamco. Anim cillum sint aliquip aliquip consequat enim ea cillum mollit sint culpa. Sunt fugiat quis enim et non ea sint.",
          "latitude": "-45.408108",
          "longitude": "-80.437664",
          picture: "http://placehold.it/32x32"
        },
        {
          "title": "ullamco nisi ullamco incididunt",
          "username": "FlorenceSantos",
          "body": "Reprehenderit excepteur consequat irure in aliqua eu cillum tempor enim aliqua aute duis. Sint consequat officia consequat est deserunt minim aute fugiat cupidatat ex est do. Dolor dolor deserunt dolor cupidatat duis exercitation cupidatat deserunt non ea fugiat cupidatat consequat. Tempor laborum occaecat incididunt magna laboris sunt.",
          "latitude": "-1.659831",
          "longitude": "123.319033",
          picture: "http://placehold.it/32x32"
        },
        {
          "title": "culpa in dolor eiusmod",
          "username": "EstellaByers",
          "body": "In commodo velit ullamco qui velit cillum non ad. Ut deserunt sunt minim cillum ullamco ut ipsum enim Lorem. Mollit pariatur reprehenderit eiusmod culpa labore veniam veniam nulla nisi labore fugiat irure irure aliqua. Qui ad ad quis aliqua nulla quis proident occaecat. Id voluptate velit aliqua aliquip do excepteur adipisicing consequat occaecat. Laborum aliquip elit esse nulla cupidatat elit eiusmod magna exercitation anim deserunt enim est nisi. Exercitation sunt do anim Lorem do ad magna cupidatat et ad velit.",
          "latitude": "-12.073278",
          "longitude": "-134.949313",
          picture: "http://placehold.it/32x32"
        },
        {
          "title": "cillum exercitation ullamco duis",
          "username": "EstellaByers",
          "body": "Commodo consequat sint consequat excepteur adipisicing nulla veniam quis officia. Eiusmod excepteur est ex amet laboris sit. Non laboris proident aliqua esse non eu ex anim amet mollit mollit aute quis. Excepteur sint voluptate ipsum dolor pariatur non aute sunt aute. Nostrud exercitation proident eu laboris deserunt proident proident ut duis velit do nisi excepteur. Id mollit exercitation occaecat officia deserunt duis occaecat deserunt anim. Ad in velit esse ullamco sit aliquip ullamco occaecat Lorem.",
          "latitude": "69.602808",
          "longitude": "39.284677",
          picture: "http://placehold.it/32x32"
        },
        {
          "title": "Lorem reprehenderit eiusmod ipsum",
          "username": "EstellaByers",
          "body": "Tempor sunt laborum sint quis ipsum dolore magna sint. Labore anim velit culpa culpa proident. Consequat Lorem est sunt et labore mollit elit. Culpa dolor id voluptate voluptate esse fugiat ex. Voluptate laborum est ullamco mollit consectetur officia fugiat adipisicing amet voluptate dolore culpa eu laborum.",
          "latitude": "57.472801",
          "longitude": "-34.546722",
          picture: "http://placehold.it/32x32"
        },
        {
          "title": "elit et eu sint",
          "username": "CardenasNoble",
          "body": "Magna duis adipisicing exercitation velit officia do do proident anim sunt commodo sint consequat. Incididunt sunt id fugiat mollit laboris veniam nisi mollit pariatur. Tempor et exercitation aliqua nostrud officia minim eiusmod culpa tempor non ullamco occaecat adipisicing ex. Id sit minim aute tempor excepteur ullamco aute do. Tempor nisi nostrud aute consequat. Voluptate non eiusmod ut fugiat Lorem voluptate adipisicing consectetur.",
          "latitude": "89.572856",
          "longitude": "-134.514383",
          picture: "http://placehold.it/32x32"
        },
        {
          "title": "consequat quis cillum excepteur",
          "username": "CardenasNoble",
          "body": "Dolore incididunt officia ad eu laboris qui. Id dolor incididunt nisi duis commodo sit amet ut elit minim minim minim deserunt culpa. Occaecat qui ex eu enim esse voluptate labore non dolor. Cupidatat velit consequat excepteur officia est irure nulla duis exercitation ex tempor aliqua eu.",
          "latitude": "14.148367",
          "longitude": "-94.348382",
          picture: "http://placehold.it/32x32"
        },
        {
          "title": "dolor Lorem et ex",
          "username": "CardenasNoble",
          "body": "Labore dolor et reprehenderit elit nulla et qui consectetur nulla aliquip voluptate. Eu magna excepteur voluptate ullamco eiusmod irure adipisicing dolore voluptate deserunt laboris fugiat. Tempor ex aliquip labore est pariatur exercitation. Irure enim dolor eiusmod adipisicing nisi. Magna excepteur sunt qui dolor irure cillum voluptate ipsum sit eu aute. Labore laboris sint fugiat commodo fugiat laboris adipisicing ullamco Lorem amet eu non eiusmod. Magna tempor laboris in est aliquip fugiat ullamco mollit eiusmod quis.",
          "latitude": "69.851127",
          "longitude": "-163.919879",
          picture: "http://placehold.it/32x32"
        }
      ]).then(function(data) {
      console.log('callback 1')
      console.log('Data successfully added!');
    }).catch(function(error) {
      console.log('callback 2')
      console.log('Error', error)
    })
  }).catch(function(error) {
    console.log('callback 3')
    console.log('Error', error)
  });
});