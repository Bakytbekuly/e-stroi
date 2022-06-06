import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import GridElement from "./GridElement"
import GridProduct from "./GridProduct"
import NotFoundPage from './NotFoundPage';




const CategoryPage = () => {
    // console.log(useParams());

    const { id } = useParams();
    const val = useSelector((state) => state.stroi.products);


    function categoryItem(arr, idItem) {
        let returnValue = null
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id == idItem) {
                returnValue = arr[i]
                return returnValue
            }
        }
    }


    let categoryItemValue = undefined

    if (id >= 11 && id <= 27) {
        categoryItemValue = categoryItem(val, id)

    }

    if (id >= 1101 && id <= 2703) {
        let id1 = Math.trunc(id / 100)

        categoryItemValue = categoryItem(val, id1)
        categoryItemValue = categoryItem(categoryItemValue.childCategories, id)

    }

    if (id >= 110101 && id <= 270300) {
        let id1 = Math.trunc(id / 10000)
        let id2 = Math.trunc(id / 100)
        categoryItemValue = categoryItem(val, id1)
        categoryItemValue = categoryItem(categoryItemValue.childCategories, id2)
        categoryItemValue = categoryItem(categoryItemValue.childCategories, id)

    }

    let chekValue = categoryItemValue.hasOwnProperty('childCategories')


    return (
        <>
            {chekValue == false ? <GridProduct id={id} categoryName={categoryItemValue.name} /> :
                categoryItemValue.childCategories.length != 0 ?
                    <GridElement props={categoryItemValue.childCategories} id={id} navigationName={categoryItemValue.name} /> : <NotFoundPage message={"No Category"} navigationName={categoryItemValue.name} />}
        </>
    )
}

export { CategoryPage }