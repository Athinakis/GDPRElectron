console.log('main proccess working');

const electron =require("electron");
const app = electron.app;
const BrowserWindow= electron.BrowserWindow;
const path =require ("path");
const url=require("url");

let win;

function createwindow(){
	win=new BrowserWindow();
	win.loadURL('file://' + __dirname + '/index.html');


	win.on('closed', ()=>{
		win=null;
	})
}
app.on('ready',createwindow);
app.on('window-all-closed', ()=> {
	if(process.platform !== 'darwin'){
		app.quit();
	}

});

app.on('activate', ()=>{
	if(win===null){
		createwindow()
	}
}); 