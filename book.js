// feild id
const errorMsg = document.getElementById('error')
const searchResult = document.getElementById('search-result'); const bookLength = document.getElementById('book-length')

const bookSearch = () => {
    const searchField = document.getElementById('search-field');
   
    errorMsg.innerText = "";
    searchResult.textContent = "";
    bookLength.innerHTML ="";
    const searchText = searchField.value;
    searchField.value = "";
   
    // ------for empty input value------
    if (searchText === "") {
        errorMsg.innerText = "!!!!  Plz Type The Book Name !!!! "
    }
    //----------- others value-------
    else {
        const url = ` https://openlibrary.org/search.json?q=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
    }

}


// display the details 

const displaySearchResult = (books) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = "";
    // ---------for  type unvalued books name------
    if (books.length === 0) {
   
        errorMsg.innerText = "No Result Found"
       
    }
    // -------valued books name-----
   else{
 
        // ---------- display the length --------------
        const bookLength = document.getElementById('book-length')
        bookLength.innerHTML = `<h2>Number of Books: ${books.length}</h2>`
        
    //---------- display the search books------------
        const searchResult = document.getElementById('search-result');
        searchResult.textContent = "";
        books.slice(0, 20).forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            
            <div class="card h-100">
                <img src=" ${`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}"class="card-img-top img-size " alt="...">
               <div class="card-body">
                    <h4 class="card-title fw-bold">book-name : ${book.title}</h4>
                    <p class="card-text fst-italic ">Author-name :<span class="text-danger"> ${book.author_name}</span></p>
                    <p class="card-text">publish date : ${book.first_publish_year}</p>
                    <p class="card-text">publisher : ${book.publisher.slice(0,1)}</p>  
              </div>
        </div>
            `;

            searchResult.appendChild(div);

        });

   }
       
   
       
    }

