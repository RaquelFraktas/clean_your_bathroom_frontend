class Modal {

  get modal(){
    return document.querySelector("#myModal")
  }

  get modalContent(){
      return document.querySelector(".modal-content")
  }

  open = () => {
    this.modal.style.display= "block"
  }

  close = () => {
    this.modal.style.display= "none"
  }


}