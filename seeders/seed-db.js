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
        password: "hello",
        email: "richard.rutledge@undefined.biz",
        phone: "+1 (853) 590-2625",
        about: "Consequat in nulla magna ut duis proident proident sit labore irure est minim cupidatat. Dolore nulla eiusmod do veniam pariatur velit irure minim ad cillum ut. Veniam officia duis amet minim culpa quis incididunt fugiat fugiat est eiusmod excepteur. Quis adipisicing magna ullamco irure velit consequat laborum proident. Dolore velit nulla excepteur dolor. Magna consequat laboris nostrud ad sit in velit est ut non in veniam.".slice(0,250),
      },
    {
        picture: "http://placehold.it/32x32",
        username: "CardenasNoble",
        password: "hello",
        email: "blanchard.graves@undefined.co.uk",
        phone: "+1 (818) 493-3142",
        about: "Ea sunt aute esse dolore ad pariatur laborum veniam dolor nisi consequat ullamco magna in. Tempor veniam esse ea anim excepteur aliquip est. Reprehenderit ut ex occaecat Lorem id sunt. Dolore consectetur pariatur culpa non ex amet ea culpa dolor aute et sit occaecat. Magna elit ex laborum ut elit officia ea voluptate dolor anim. Eiusmod ullamco voluptate qui cillum reprehenderit ut et officia nulla anim commodo laborum.".slice(0,250),
    },
    {
        picture: "http://placehold.it/32x32",
        username: "FlorenceSantos",
        password: "hello",
        email: "mindy.spence@undefined.net",
        phone: "+1 (915) 519-2274",
        about: "Consequat non duis ea ut laborum irure id nulla eu laborum. Id aliqua nulla adipisicing ut ea do nisi laboris id occaecat ipsum proident magna dolore. Ipsum quis ipsum occaecat dolore do laboris elit consectetur minim sit ea. Sunt ipsum Lorem laborum officia est et. Nisi nisi nulla nostrud officia adipisicing exercitation. Officia eu qui cupidatat et adipisicing ut nisi ullamco aliquip voluptate deserunt sit amet ex. Occaecat ut voluptate mollit laborum et non.".slice(0,250),
    },
    {
        picture: "http://placehold.it/32x32",
        username: "TaylorSummers",
        password: "hello",
        email: "gardner.burt@undefined.org",
        phone: "+1 (938) 541-3100",
        about: "Est ex eu consectetur sunt. Ipsum voluptate amet duis mollit. Dolore consequat exercitation id minim velit. Voluptate dolore incididunt velit ullamco cupidatat nostrud est commodo consectetur irure magna elit. Veniam eu cupidatat sunt ipsum minim excepteur minim et irure consectetur.".slice(0,250),
    }
    ]).then(function(response) {
    
    db.Listing.bulkCreate([
      {
        "title": "deserunt labore aliquip mollit occaecat",
        "username": "FlorenceSantos",
        "body": "Minim enim enim sunt do aliquip ex est. Reprehenderit ullamco sit proident quis ut occaecat ea aute. Dolore irure officia eiusmod nisi. Esse velit adipisicing voluptate laborum reprehenderit aliquip ipsum aliquip deserunt ipsum anim mollit incididunt. Nulla pariatur nulla anim duis adipisicing dolore exercitation id ullamco magna aute. Incididunt magna ut deserunt amet non tempor sit nostrud Lorem aute in adipisicing culpa ut.",
        "latitude": "41.698887",
        "longitude": "-114.732795"
      },
      {
        "title": "elit et qui sint exercitation",
        "username": "TaylorSummers",
        "body": "Velit consequat do proident ipsum anim aute elit proident. Sunt aute minim pariatur sit sit aliqua fugiat culpa mollit. Duis qui consequat occaecat ea amet enim eu officia tempor enim est.",
        "latitude": "45.880839",
        "longitude": "-116.676789"
      },
      {
        "title": "eu velit nisi minim ullamco",
        "username": "CardenasNoble",
        "body": "Qui deserunt qui officia ex proident excepteur ad fugiat voluptate elit laborum est anim. Culpa sint aliquip qui nostrud quis culpa anim ullamco exercitation exercitation ex sunt. Eu irure duis adipisicing amet id dolor fugiat irure in deserunt reprehenderit fugiat veniam laborum. Commodo mollit incididunt Lorem eu. Cillum ea aliqua pariatur minim id commodo amet aute ea ullamco veniam Lorem ea laborum.",
        "latitude": "35.218567",
        "longitude": "-94.129277"
      },
      {
        "title": "voluptate aute Lorem in tempor",
        "username": "CardenasNoble",
        "body": "Adipisicing sit adipisicing consequat ipsum amet est non. Ut deserunt commodo labore non consectetur Lorem occaecat voluptate nostrud voluptate minim irure elit. Occaecat velit consectetur sit ipsum sint ad ea elit ea ut dolor irure aliquip. Labore veniam sint laborum Lorem laboris Lorem. Irure enim velit pariatur esse Lorem dolore laborum exercitation.",
        "latitude": "38.39888",
        "longitude": "-85.550864"
      },
      {
        "title": "tempor culpa consectetur sint aliquip",
        "username": "FlorenceSantos",
        "body": "Irure non irure quis eiusmod incididunt quis mollit magna ullamco velit elit tempor. Cupidatat cillum exercitation in dolor occaecat eiusmod nisi amet ipsum officia dolore est. Pariatur magna sint velit esse nostrud ipsum ea proident veniam nulla dolore Lorem. Sint ea ullamco culpa in consequat. Anim nisi ut culpa fugiat nisi aliquip sunt cillum ullamco duis Lorem incididunt laborum.",
        "latitude": "45.418607",
        "longitude": "-76.811245"
      },
      {
        "title": "in irure mollit proident cupidatat",
        "username": "CardenasNoble",
        "body": "Reprehenderit exercitation incididunt et enim velit. Qui do ut quis amet nostrud est. Excepteur non dolor culpa culpa quis laborum do aute fugiat incididunt reprehenderit Lorem aute minim. Laboris aute eu esse nulla amet pariatur anim.",
        "latitude": "32.791748",
        "longitude": "-97.755902"
      },
      {
        "title": "sit incididunt consequat cupidatat fugiat",
        "username": "EstellaByers",
        "body": "Nisi consequat adipisicing ut consequat. Ad elit dolor mollit adipisicing incididunt deserunt velit esse proident mollit nisi sint nulla ullamco. Esse laborum anim dolore anim velit tempor nisi irure nostrud tempor.",
        "latitude": "37.992593",
        "longitude": "-80.195777"
      },
      {
        "title": "minim in consectetur aliqua consectetur",
        "username": "FlorenceSantos",
        "body": "In mollit ad exercitation aute. Aute nostrud culpa aliquip qui fugiat eu. Sunt id commodo pariatur proident minim sint consectetur irure minim pariatur. Qui dolore veniam esse nostrud in velit eiusmod commodo sint voluptate enim reprehenderit pariatur.",
        "latitude": "39.04832",
        "longitude": "-83.325257"
      },
      {
        "title": "id do duis voluptate dolor",
        "username": "FlorenceSantos",
        "body": "Ex mollit laborum labore ad consectetur labore consectetur sunt anim. Velit eiusmod reprehenderit incididunt labore dolore sint dolore elit irure qui aliqua. Dolore sunt est veniam tempor magna anim sit consectetur excepteur velit ad. Enim esse ex enim fugiat aute dolore. Esse mollit pariatur ullamco tempor do proident elit tempor cupidatat veniam qui. Irure est commodo quis nulla irure laboris labore commodo.",
        "latitude": "46.357062",
        "longitude": "-103.183243"
      },
      {
        "title": "do culpa in occaecat nisi",
        "username": "CardenasNoble",
        "body": "Labore ea dolore consectetur sunt ad proident ex ad aliquip incididunt ea et ea. Exercitation aliqua incididunt minim est proident laboris et sit magna. Id eiusmod mollit ipsum minim cupidatat quis proident qui nulla qui officia. Sunt sint aliquip ut enim ea nisi veniam dolore incididunt minim laborum excepteur mollit pariatur. Commodo ad ut incididunt enim dolor eiusmod.",
        "latitude": "37.734977",
        "longitude": "-77.776351"
      },
      {
        "title": "dolor ipsum in ipsum laboris",
        "username": "FlorenceSantos",
        "body": "Aliqua eiusmod qui aliqua non voluptate est dolor. Aliquip ad laborum ullamco veniam occaecat proident irure elit. Fugiat mollit ut est pariatur. Culpa enim aute enim reprehenderit dolore consectetur. Et nostrud elit ad elit exercitation consectetur irure cupidatat fugiat non.",
        "latitude": "38.128255",
        "longitude": "-116.643417"
      },
      {
        "title": "elit nostrud voluptate reprehenderit aute",
        "username": "CardenasNoble",
        "body": "Excepteur exercitation mollit enim consectetur dolore eu do adipisicing voluptate non consectetur. Commodo cillum amet nostrud fugiat enim irure dolore qui fugiat anim. Aute nostrud et consectetur elit est Lorem dolor.",
        "latitude": "46.436997",
        "longitude": "-82.864712"
      },
      {
        "title": "duis exercitation veniam anim voluptate",
        "username": "TaylorSummers",
        "body": "Anim exercitation nisi pariatur voluptate. Reprehenderit dolore ex ea proident velit dolore Lorem minim. Mollit in nisi veniam amet eu laboris sint ipsum labore veniam magna.",
        "latitude": "35.834048",
        "longitude": "-113.277603"
      },
      {
        "title": "deserunt esse duis excepteur deserunt",
        "username": "FlorenceSantos",
        "body": "Tempor anim tempor dolor excepteur veniam voluptate tempor. Magna magna ea anim exercitation labore elit culpa anim enim voluptate sint pariatur laborum ipsum. Occaecat fugiat cillum enim id cillum.",
        "latitude": "47.404221",
        "longitude": "-85.733963"
      },
      {
        "title": "et velit elit cupidatat voluptate",
        "username": "TaylorSummers",
        "body": "Id magna adipisicing sint amet labore in laboris enim aliquip ex. Fugiat aliqua do aliquip dolore est occaecat sint consequat. Lorem et exercitation qui est enim veniam sit aliqua minim esse.",
        "latitude": "40.500425",
        "longitude": "-115.217832"
      },
      {
        "title": "mollit veniam consequat excepteur mollit",
        "username": "FlorenceSantos",
        "body": "Anim esse incididunt aute commodo duis veniam consequat elit fugiat pariatur irure. Dolore mollit fugiat sit mollit. Est in exercitation eu aliquip adipisicing duis non nostrud aute cillum non deserunt velit sunt. Fugiat adipisicing amet proident esse minim cupidatat laboris do aute nulla duis enim. Reprehenderit ut ut enim voluptate qui quis eu commodo id sit fugiat elit reprehenderit voluptate.",
        "latitude": "31.843184",
        "longitude": "-81.766003"
      },
      {
        "title": "excepteur sint eu laboris magna",
        "username": "CardenasNoble",
        "body": "Duis commodo reprehenderit voluptate tempor cillum amet et consequat nulla. Cillum dolore duis ipsum magna Lorem labore cupidatat consectetur nostrud esse. Labore proident et eu laborum enim velit anim non occaecat Lorem.",
        "latitude": "44.754933",
        "longitude": "-119.576205"
      },
      {
        "title": "id dolore nostrud consectetur mollit",
        "username": "EstellaByers",
        "body": "Aute tempor elit voluptate occaecat dolore. Fugiat consequat ipsum Lorem ullamco voluptate pariatur dolore ex proident in qui labore est aliqua. Ipsum laboris aliquip ipsum adipisicing ex enim veniam exercitation magna ea pariatur dolore ex id. Id deserunt Lorem officia proident occaecat.",
        "latitude": "40.641883",
        "longitude": "-88.407775"
      },
      {
        "title": "reprehenderit laboris id eiusmod quis",
        "username": "TaylorSummers",
        "body": "Nulla laborum duis velit ea veniam sit consequat aliqua. Elit velit eiusmod non minim enim tempor. Magna exercitation et tempor id tempor. Labore tempor aliqua ipsum ea duis cupidatat sit ex dolor nisi nulla. Excepteur qui ea consectetur officia anim cupidatat fugiat.",
        "latitude": "42.944993",
        "longitude": "-111.54684"
      },
      {
        "title": "quis sunt pariatur exercitation laboris",
        "username": "CardenasNoble",
        "body": "Fugiat aute eu eiusmod id esse sit labore amet eiusmod qui sunt. Tempor nulla qui aliqua cupidatat voluptate exercitation culpa. Irure occaecat veniam proident ullamco laboris laborum tempor. Id quis veniam cupidatat dolore ea irure voluptate do mollit et nostrud irure adipisicing cupidatat. Exercitation labore proident veniam nulla ad commodo laboris voluptate labore. Laboris sint ad ut quis quis Lorem ea ad ex cillum et laboris et elit. Tempor in proident sunt qui esse adipisicing occaecat.",
        "latitude": "39.571423",
        "longitude": "-105.995816"
      },
      {
        "title": "sunt velit enim occaecat nisi",
        "username": "TaylorSummers",
        "body": "Aliquip ad ipsum incididunt aliquip deserunt labore quis officia cillum nulla pariatur. Irure amet laborum proident duis ut nisi culpa culpa officia. Nisi ad culpa quis minim esse anim. Veniam reprehenderit sint ea incididunt sunt sunt commodo aute cupidatat mollit Lorem cupidatat veniam quis. Reprehenderit ea deserunt ipsum eiusmod labore nisi laborum elit non ea culpa non minim.",
        "latitude": "40.689379",
        "longitude": "-105.647443"
      },
      {
        "title": "et magna cupidatat enim anim",
        "username": "CardenasNoble",
        "body": "Mollit dolor et consequat adipisicing laboris sint laboris anim id nisi nisi sit. Dolore in cupidatat reprehenderit sint amet et anim ex officia id amet. Reprehenderit veniam amet labore deserunt ex culpa dolor eiusmod aliqua est proident anim. Consectetur velit fugiat est pariatur id sunt occaecat fugiat.",
        "latitude": "42.896033",
        "longitude": "-103.903052"
      },
      {
        "title": "aute sint laborum elit occaecat",
        "username": "TaylorSummers",
        "body": "Deserunt voluptate qui nisi enim dolore qui. Esse occaecat voluptate aliqua aliqua. Aliquip est in quis laborum consectetur sit.",
        "latitude": "46.20149",
        "longitude": "-93.281963"
      },
      {
        "title": "adipisicing excepteur sint amet anim",
        "username": "CardenasNoble",
        "body": "Laborum laboris magna cupidatat amet excepteur do nostrud duis sint ut. Ex irure ut ipsum officia eiusmod id ipsum velit ad cillum reprehenderit. Ipsum tempor amet culpa laboris esse. Officia reprehenderit commodo anim sunt incididunt in qui reprehenderit nostrud eu. Nulla mollit laborum eu et deserunt ut laboris deserunt et sit eiusmod ullamco incididunt est.",
        "latitude": "34.484572",
        "longitude": "-114.460446"
      },
      {
        "title": "amet Lorem commodo ullamco aliqua",
        "username": "EstellaByers",
        "body": "Proident dolore commodo non eiusmod duis. Esse irure nulla laboris voluptate ullamco Lorem sunt voluptate. Ut cillum id sit quis aute tempor aliqua laborum est ex do.",
        "latitude": "47.270561",
        "longitude": "-95.767777"
      },
      {
        "title": "deserunt nostrud laboris reprehenderit velit",
        "username": "CardenasNoble",
        "body": "Irure voluptate esse veniam excepteur pariatur consequat. Dolor aute elit sunt anim tempor minim consequat eiusmod Lorem amet. Irure aute labore nostrud excepteur nisi. Laboris eiusmod irure dolor esse do ad excepteur ad mollit mollit ad. Nulla laborum aliquip occaecat sit et dolor id incididunt nostrud esse. Nostrud dolor ad ex veniam in eiusmod consequat esse reprehenderit laboris. Nostrud nisi excepteur laborum deserunt dolor aute occaecat ad nostrud mollit qui reprehenderit ad.",
        "latitude": "45.105495",
        "longitude": "-116.820018"
      },
      {
        "title": "pariatur laborum in ea id",
        "username": "EstellaByers",
        "body": "Occaecat et quis labore aute officia esse nostrud dolore aliquip. Aliqua proident anim ullamco aliquip eiusmod. Aliqua consequat irure mollit sit sit aute mollit non. Pariatur tempor in reprehenderit minim officia. Adipisicing cupidatat consectetur mollit deserunt. Nulla minim mollit dolor deserunt. Sint consequat veniam eiusmod ea consequat ex tempor tempor id sint eiusmod Lorem.",
        "latitude": "41.938266",
        "longitude": "-78.192208"
      },
      {
        "title": "excepteur elit proident consectetur magna",
        "username": "CardenasNoble",
        "body": "Quis non culpa ullamco mollit irure do irure aliquip proident. Non incididunt esse amet non cupidatat in magna incididunt nulla elit aliquip. Tempor sit quis consequat voluptate officia. Consectetur sunt reprehenderit Lorem irure mollit irure cillum elit eu voluptate irure. Minim officia in ex velit enim velit deserunt est. Laborum incididunt do deserunt ex duis minim. Elit consectetur non do sit irure.",
        "latitude": "47.296681",
        "longitude": "-101.908264"
      },
      {
        "title": "excepteur culpa eu consequat sit",
        "username": "CardenasNoble",
        "body": "Aliquip aliquip do sit proident do sint. Amet quis Lorem sunt enim. Laborum ex pariatur non fugiat eu id voluptate officia proident nisi. Ea qui duis sit consequat dolore elit dolor ex eiusmod ullamco commodo. Reprehenderit mollit deserunt proident dolore ullamco est id qui exercitation nostrud occaecat qui. Est voluptate et aliqua pariatur esse nulla cupidatat eu reprehenderit ipsum est mollit ex.",
        "latitude": "38.648458",
        "longitude": "-108.784449"
      },
      {
        "title": "laborum velit in elit dolore",
        "username": "CardenasNoble",
        "body": "Cillum id ex aliquip deserunt aute sunt Lorem eu proident esse anim fugiat ad enim. Dolor dolor fugiat sunt ipsum ex mollit id elit exercitation incididunt et culpa adipisicing magna. Id aute exercitation dolore consequat. Culpa ut excepteur ex et tempor elit laborum culpa culpa cupidatat labore dolor. Fugiat cillum dolor velit cillum qui aute.",
        "latitude": "47.874647",
        "longitude": "-102.314798"
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