            staticObject={};//initializing an object to store data
            let total=0;//initializing  the total overall count made
            //s is element clicked 
            //function calle when you click each grid_items button with a (background image)
            f=(s)=>{
                total=0;
                //number for counting similar class
                static_count=0;
                document.querySelectorAll('.grid_items').forEach(el=>{
                    //when a  flexowrap is not defined in the new object
                    if(staticObject['object_tracker'+static_count]==undefined){
                        staticObject['object_tracker'+static_count]=0;
                    }
                    //s is element clicked and el is for each element grid_items
                    if(el==s){
                        //when equalcount is increased and element unique number stored in staticObject
                        //button number is increased
                        //and value is stored to be obtained incase of refresh
                        staticObject['object_tracker'+static_count]=Number(staticObject['object_tracker'+static_count])+1;
                        document.querySelectorAll('.item_count')[static_count]
                        .innerHTML=document.querySelectorAll('.item_count')[static_count]
                        .innerHTML.replace(document.querySelectorAll('.item_count')[static_count]
                        .innerText,staticObject['object_tracker'+static_count]);
                        window.localStorage
                        .setItem('object_tracker'+static_count,staticObject['object_tracker'+static_count]);
                    }//increasing number of the flexowrap clicked
                    total+=Number(window.localStorage
                    .getItem('object_tracker'+static_count,));//total vote count
                    static_count++;//count for each element 
                })
                total_count.innerHTML = ` ${total}`;
        }
        
        
          /*everytime page loads seting required definitions*/
            flexowrapnumber=0;            
            document.querySelectorAll('.grid_items').forEach(el=>{
                 /*allbutton are given a click event*/
                el.onclick=(e)=>{
                    f(e.target);      
                    file_name.innerHTML="Last Clicked Image :<wbr> "+getComputedStyle(e.target).backgroundImage
                    .split('/')[getComputedStyle(e.target).backgroundImage.split('/').length-1]
                    .replaceAll('"',"").replaceAll(')',"").replaceAll(".jpg","").replaceAll(".jpeg","")
                }
                /*all count output and icons are created and appended to  button*/
                love=document.createElement('output');
                love_img=new Image
                love_img.src="images/love.png";
                love_img.setAttribute("alt","love icon");
                el.appendChild(love);
                love.appendChild(love_img);
                love.className="item_count";
                 /*all count divs are checked if they have data from the past*/
                if(window.localStorage.getItem('object_tracker'+flexowrapnumber)!=undefined){
                     /*past data are restored*/
                    love.innerHTML=love.innerHTML.replace(love.innerText,window.localStorage
                    .getItem('object_tracker'+flexowrapnumber))
                    staticObject['object_tracker'+flexowrapnumber]=window.localStorage
                    .getItem('object_tracker'+flexowrapnumber);
                    total+=Number(window.localStorage.getItem('object_tracker'+flexowrapnumber))
                }
                else{
                 /*without past data divs start count number*/
                love.innerHTML=love.innerHTML.replace(love.innerText,"0");}
                flexowrapnumber++;
            })
            // geting total on reload
            total_count.innerHTML=total;
            
            
            
            //reset button
            /*for reseting all button images previously clicked*/
            resetFunction=()=>{
            flexowrapnumber=0;            
            document.querySelectorAll('.grid_items').forEach(el=>{
                 /*remove history*/
                window.localStorage.removeItem('object_tracker'+flexowrapnumber)
                 /*start object*/
                staticObject={}
                /*initialize buttons*/
                document.querySelectorAll('.item_count')[flexowrapnumber]
                .innerHTML=document.querySelectorAll('.item_count')[flexowrapnumber]
                .innerHTML.replace(document
                .querySelectorAll('.item_count')[flexowrapnumber].innerText,"0");
                flexowrapnumber++;
                // to prevent error after reset for not defining object and storage
                f(document.querySelectorAll('.grid_items')[0]);
                staticObject['object_tracker'+0]=0;
                  document.querySelectorAll('.item_count')[0]
                .innerHTML=document.querySelectorAll('.item_count')[0]
                .innerHTML.replace(document.querySelectorAll('.item_count')[0].innerText,"0");
                window.localStorage.setItem('object_tracker'+0,staticObject['object_tracker'+0]);
            })
            total=1;
            total_count.innerHTML="0"
            }
            //reset button function given to hamburger and reset all button
            reset.onclick=()=>{
                 resetFunction()
            }
            
            
            //hamburger menu clicks   
               window.onclick=(el)=>{
                   console.log(el.target.id)
                   if(el.target==document.querySelector('#logo_container button')){
                       if(document.querySelector('#logo_container button').id==""){
                            document.querySelector('#logo_container button').setAttribute('id','icon_hamburger')
                            menu_container_close.setAttribute('id','menu_container')
                        }
                        else if(document.querySelector('#logo_container button').id!=""){
                            document.querySelector('#logo_container button').removeAttribute('id')
                            menu_container.setAttribute('id','menu_container_close')
                        }
                   }
                   else {
                       if(document.body.innerHTML.includes('menu_container')){
                           if(document.querySelector('#logo_container button').id!=""
                           &&!menu_container.contains(el.target)
                           &&(el.target.tagName!=='NAV')){
                               document.querySelector('#logo_container button').removeAttribute('id')
                               menu_container.setAttribute('id','menu_container_close')
                           }
                       }
                  }
           }