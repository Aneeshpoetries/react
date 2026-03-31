function customRender(reactElement,root){
    const domE=document.createElement(reactElement.type)
    domE.innerHTML=reactElement.children
    domE.setAttribute('href',reactElement.props.href)
    domE.setAttribute('target',reactElement.props.target)
    root.appendChild(domE)

}
const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click here to visit google"
}

const root=document.getElementById("root")
customRender(reactElement,root)