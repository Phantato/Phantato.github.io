function showThisCategory(node)
{
    disp = node.getElementsByClassName("category-posts-show")[0]
    if(disp){
        disp.className = "category-posts"
        return
    }
    disp = document.getElementsByClassName("category-posts-show")[0]
    if(disp) disp.className = "category-posts"
    child = node.getElementsByClassName("category-posts")[0]
    child.className = "category-posts-show"
}
