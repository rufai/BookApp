
function BookList(props){
    props.setHelpMeCollect(6)
    return (
        <section className={"booklist booklist-" + props.color}>
            {props.children}
        </section>
    )
}

export default BookList;