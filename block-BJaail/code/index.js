class BookList{
    constructor(root,list=[]){
        this.books = list;
        this.root = root;
    }
    add(title,author,isbn){
        let book = new Book(title,author,isbn);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }
    handleDelete(id){
        let index = this.books.findIndex((book) => book.id ===id );
        this.books.splice(index,1);
        this.createUI();
        return this.books.length;
    }
    createUI(){
        this.root.innerHTML = "";
        this.books.forEach((book) => {
        let ui = book.createUI();
        ui.querySelector("span").addEventListener("click",this.handleDelete.bind(this,book.id));
        this.root.append(ui);
    });
}

}
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.id =  `id-${Date.now()}`;
    }
    createUI(){
        // <tr>
        //         <td>Alfreds Futterkiste</td>
        //         <td>Maria Anders</td>
        //         <td>Germany</td>
        // </tr>
        let li = document.createElement("tr");

        let paraOne = document.createElement("td");
        paraOne.innerText = this.title;
        

        let paraTwo = document.createElement("td");
        paraTwo.innerText = this.author;

        let paraThree = document.createElement("td");
        paraThree.innerText = this.isbn;

        let span = document.createElement("span");
        span.innerText = "❌";
        li.append(paraOne,paraTwo,paraThree,span);
        return li;
    }
}

let form = document.querySelector("#form");

let myBookList = new BookList(document.querySelector(".display"));



form.addEventListener("submit",(event)=>{
    
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;


    myBookList.add(title,author,isbn);

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
});