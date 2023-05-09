const select = (selector) =>  document.querySelector(selector)

const form = select('#form');
const message = select('.message');

const acceptedImageFiles = ['jpg', 'jpeg', 'png'];

const displayMessage = (text,color) => {
    message.style.visibility = 'visible';
    message.style.backgroundColor = color;
    message.innerText = text;
    setTimeout(() => {
        message.style.visibility = 'hidden'
        title = ''

    }, 3000)

}

const validateForm = () => {
    const title = select('.title').value.trim()
    const content = select('#content').value.trim()
    const thumbnail = select('#thumbnail').value
    const category = select('#category').value

    if(!title || !content || !thumbnail || category == '0'){
        // display some error
        return displayMessage('One or More Fields Empty', 'red');


        
    }
    const extension = thumbnail.split('.').pop()
    if(!acceptedImageFiles.includes(extension)){
        return displayMessage('Image Extension Not Accepted', 'red')

    }



}




form.addEventListener('submit', (e) => {
    e.preventDefault();
    //validate form
    valid = validateForm();
    if(valid){
        
    }








    
})
