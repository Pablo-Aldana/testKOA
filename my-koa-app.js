const Koa = require('koa');
const app = new Koa();
const koaStatic = require('koa-static');

const htmlBody = `<html xmlns="http://www.w3.org/1999/xhtml"
xmlns:fb="http://ogp.me/ns/fb#">
  <head>


<!-- HTML Meta Tags -->
<title>VIVE</title>
<meta name="description" content="Somos la tentación que te invita a salir de casa, disfrutar de tu ciudad y VIVIR">

<!-- Facebook Meta Tags -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="image_src" type="image/jpeg" href="http://192.168.68.114:3000/uploads/Screenshot_2022_06_01_20_51_28_mz_T_Lrq_049c151b2d.png"/>

<meta property="og:url" content="https://vive.scintillam.com/"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="VIVE71"/>
<meta property="og:description" content="Somos la tentación que te invita a salir de casa, disfrutar de tu ciudad y VIVIR"/>
<meta property="og:image:type" content="image/jpeg" />
<!--<meta property="og:image" content="http://192.168.68.114:3000/uploads/Screenshot_2022_06_01_20_51_28_mz_T_Lrq_049c151b2d.png?updated_at=2022-06-01T18:51:57.785Z"/>-->

<!-- Twitter Meta Tags 
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="vive.scintillam.com">
<meta property="twitter:url" content="https://vive.scintillam.com/">
<meta name="twitter:title" content="VIVE2">
<meta name="twitter:description" content="Somos la tentación que te invita a salir de casa, disfrutar de tu ciudad y VIVIR">
<meta name="twitter:image" content="/uploads/Screenshot_2022_06_01_20_51_28_mz_T_Lrq_049c151b2d.png?updated_at=2022-06-01T18:51:57.785Z">
<!--<meta http-equiv='refresh' content='0; URL=/download'>-->
</head> 
<body style="background-color:#950a45;"><center><img src="http://192.168.68.114:3000/uploads/Screenshot_2022_06_01_20_51_28_mz_T_Lrq_049c151b2d.png" alt="centered image" ></center>
</body>

</html>



`;
const redirect = async function (ctx, next) {
  if (ctx.request.url === '/') {
    ctx.body = htmlBody;
  } else {
    await next()
  }
}

app.use(redirect); // this will add your redirect middleware
app.use(koaStatic('./public')); // serving static files

app.listen(3000);
/*app.use(async ctx => {
  if (ctx.request.url === '/') {
  ctx.body = 
});*/

//app.listen(3000);