            staticObject={};//initializing an object to store data
            let total=0;//initializing  the total overall count made
            //s is element clicked 
            //function calle when you click each flexowrap button with a (background image)
            f=(s)=>{
                total=1;
                //number for counting similar class
                static_count=0;
                document.querySelectorAll('.flexowrap').forEach(el=>{
                    //when a  flexowrap is not defined in the new object
                    if(staticObject['object_tracker'+static_count]==undefined){
                        staticObject['object_tracker'+static_count]=0;
                    }
                    //s is element clicked and el is for each element flexowrap 
                    if(el==s){
                        //when equalcount is increased and element unique number stored in staticObject
                        //button number is increased
                        //and value is stored to be obtained incase of refresh
                        staticObject['object_tracker'+static_count]=Number(staticObject['object_tracker'+static_count])+1;
                        document.querySelectorAll('.number')[static_count].innerHTML=staticObject['object_tracker'+static_count];
                        window.localStorage.setItem('object_tracker'+static_count,staticObject['object_tracker'+static_count]);
                    }//increasing number of the flexowrap clicked
                    static_count++;//count for each element 
                    total+=Number(window.localStorage.getItem('object_tracker'+static_count,));//total vote count
                })
                total_count.innerHTML = `Total: ${total}`;
        }
          /*everytime page loads*/
            flexowrapnumber=0;            
            document.querySelectorAll('.flexowrap').forEach(el=>{
                 /*allbutton are given a click event*/
                el.onclick=(e)=>{
                    f(e.target);      
                    notification.style.backgroundImage=
                    "url(./images/"+e.target.style.backgroundImage
                    .split('/')[e.target.style.backgroundImage.split('/').length-1]
                    .replaceAll('"',"").replaceAll(')',"")+")";
                    file_name.innerHTML=e.target.style.backgroundImage
                    .split('/')[e.target.style.backgroundImage.split('/').length-1]
                    .replaceAll('"',"").replaceAll(')',"").replaceAll(".jpg","").replaceAll(".jpeg","")
                }
                /*all count divs are created and appended to  button*/
                love=document.createElement('div');
                el.appendChild(love);
                love.className="number";
                 /*all count divs are checked if they have data from the past*/
                if(window.localStorage.getItem('object_tracker'+flexowrapnumber)!=undefined){
                     /*past data are restored*/
                    love.innerHTML=window.localStorage.getItem('object_tracker'+flexowrapnumber)
                    staticObject['object_tracker'+flexowrapnumber]=window.localStorage.getItem('object_tracker'+flexowrapnumber)
                }
                else{
                 /*without past data divs start count number*/
                love.innerHTML="0";}
                flexowrapnumber++;
            })
            
            /*for reseting all button images previously clicked*/
            resetFunction=()=>{
            flexowrapnumber=0;            
            document.querySelectorAll('.flexowrap').forEach(el=>{
                 /*remove history*/
                window.localStorage.removeItem('object_tracker'+flexowrapnumber)
                 /*start object*/
                staticObject={}
                /*initialize buttons*/
                document.querySelectorAll('.number')[flexowrapnumber].innerHTML="0";
                flexowrapnumber++;
            })
            total=1;
            total_count.innerHTML="Total: 0"
            }
            addFunction=()=>{
            flexowrapnumber=0;            
            document.querySelectorAll('.flexowrap').forEach(el=>{
                 /*increment all object*/
                staticObject['object_tracker'+flexowrapnumber]=Number(staticObject['object_tracker'+flexowrapnumber])+1;
                /*increment all hisory*/
                 window.localStorage.setItem('object_tracker'+flexowrapnumber,staticObject['object_tracker'+flexowrapnumber]);
                /*increment all buttons*/
                document.querySelectorAll('.number')[flexowrapnumber].innerHTML=Number(
                    document.querySelectorAll('.number')[flexowrapnumber].innerHTML
                )+1;
                flexowrapnumber++;
            })
            }
            
            //reset button function given to hamburger and reset all button
            m[0].onclick=()=>{
                 resetFunction()
            }
            hamburger.onclick=()=>{
                 resetFunction()
            }
             m[1].onclick=()=>{
                 addFunction()
            }
            
            window.onload=()=>{
                if(window.innerWidth<1110){
                   dark=new Image;
                   dark.style.fontSize="3rem"
                   dark.style.width="95vw"
                   dark.style.height="95vh"
                   dark.style.position="fixed"
                   dark.style.top="0px"
                   dark.style.bottom="0px"
                   dark.style.zIndez="80000"
                   dark.style.display="flex"
                   dark.style.justifyContent="center"
                   dark.style.alignItems="center"
                   dark.style.color="#fff"
                   dark.style.backgroundColor="#000"
                   dark.alt=" for better view Open on Desktop"
                   document.body.appendChild(dark)
                }
                setTimeout(() => {
                    dark.remove()
                }, 5000);
            }
            
            
            /*not relevant to the project  gives nav a color of section entered on scroll*/
            
            header=document.querySelector("#header");
            navColorFunction=(header , el , stingas)=>        {
                for(i of header.classList)   {
                    if(i.includes(stingas))    {
                        header.classList.remove(i);
                    }
                }
                header.classList.add(el.classList[el.classList.length-1].replaceAll("fassitaariosiar" , stingas))
            }
            window.onscroll=(e)=>          {
                document.querySelectorAll('.hada').forEach(el=>       {
                    if(el.getBoundingClientRect().bottom   >    "120"&&el.getBoundingClientRect().top<"120")    {
                        navColorFunction(header , el , 'fassitaariosiar');
                        navColorFunction(m[1] , el , 'sbutton');
                        navColorFunction(m[0] , el , 'obutton');
                    }
                    console.log(el.getBoundingClientRect().bottom);
                })
            }