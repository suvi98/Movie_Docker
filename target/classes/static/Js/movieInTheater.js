function commingsoon(){
    var noti = document.querySelector('h1');
        var select = document.querySelector('.select');
        
        var button = document.getElementsByTagName('button');
        console.log(button);
        for(but of button){
         
            but.addEventListener('click', (e)=>{
                var add = Number(noti.getAttribute('data-count')|| 0);
                noti.setAttribute('data-count',add + 1);
                noti.classList.add('zero');
    
                //copy - past element

                var parent = e.target.parentNode;
                var clone  = parent.cloneNode(true);
                select.appendChild(clone);
                clone.lastElementChild.innerText  = "Remove";

                if(clone){
                    noti.onclick = ()=>{

                        select.classList.toggle('display');
                    }
                }

                //image animation to cart 
                var image = e.target.parentNode.querySelector('img');
                var span = e.target.parentNode.querySelector('span');
                var s_image = image.cloneNode(false);
                span.appendChild(s_image)
                span.classList.add('active');
                setTimeout(() =>{
                    span.removeChild(s_image)
                    span.classList.remove('active');
                }, 500)
                
            })
        }
    
      
        fetching_data()
        //closedata();
  }

  
    
  function  fetching_data() {
    
    fetch("./data1.json").then(Response=>{
        return Response.json();
        }).then (   
        data=>info(data));

}
       

        function info(data){

            for (let index = 0; index < data.moviesintheaters.length; index++) {
            console.log(data.moviesintheaters);
            var images = '';
            images += '<img src="' + data.moviesintheaters[index].posterurl +  '" style=""/>';
            document.getElementsByClassName('movie_img')[index].innerHTML = images;
            document.getElementsByClassName('movie_id')[index].innerHTML= data.moviesintheaters[index].year;
            document.getElementsByClassName('movie_title')[index].innerHTML= data.moviesintheaters[index].title;
            document.getElementsByClassName('movie_date')[index].innerHTML= data.moviesintheaters[index].releaseDate;
        }
    }

    // var data_glo="";
    // function info(data){
    //     for (let index = 0; index < data.moviescoming.length; index++) {

    //         data_glo = data_glo +

    //         `
        
    //        <section>
     
    //         <div>
    //         <img src="${data.moviescoming[index].poster}">
    //             <h6 class="movie_id">  ${data.moviescoming[index].id}</h6>
    //             <h6 class="movie_title">  ${data.moviescoming[index].title}</h6>
    //                 <h6 class="movie_date">  ${data.moviescoming[index].releaseDate}</h6>
    //                 <span></span>
    //                 <button onclick=popup()>Add-cart</button>
    //          </div>
      
 
    //         </section><br>
    //      `; 

    //     }
    //     document.getElementById('myfavdata').innerHTML= data_glo;
    // }

