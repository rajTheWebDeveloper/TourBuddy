import {screen, render, findByText,waitFor, fireEvent} from '@testing-library/react' 
import Tours from './Tours'


test('Test read more buttons are rendered',async ()=>
{
    let {getAllByRole,getByText,findByText,findAllByRole}=render(<Tours/>)
    let notInterestedButtons =await findAllByRole(/not-interested/i)
    expect(notInterestedButtons.length).toEqual(5)
    let dublin = await findByText(/Tour Buddy/i,{timeout:5000})
    expect(dublin).toBeInTheDocument()
})

test('Test if not interested button shows up clearing the tour clicked',async()=>
{
    let {findAllByRole,getByText}=render(<Tours/>)
    let notInterestedButtons=await findAllByRole(/not-interested/i)
    // expect(notInterestedButtons.length).toEqual(5)
    // fireEvent.click(notInterestedButtons[0])
    // let notInterestedButtonsUpdated = await findAllByRole(/not-interested/i);
    // expect(notInterestedButtonsUpdated.length).toEqual(4)
    for(let button of notInterestedButtons)
    {
        fireEvent.click(button)
    }
    let noToursLeft = getByText(/No Tours Left/i);
    expect(noToursLeft.textContent.length).toEqual(13)
})


test("Test read more is expanding text",async ()=>
{
    let {findAllByRole,getAllByText}=render(<Tours/>)
    let expandContracts =await findAllByRole(/expand-contract/i);

    let beforeClickContentLength = await findAllByRole("info");

    expect(beforeClickContentLength[0].textContent.length).toEqual(200)
    fireEvent.click(expandContracts[0])

    let afterClickContentLength=await findAllByRole('info')
    expect(afterClickContentLength[0].textContent.length).toBeGreaterThan(200)

    // for(let button of expandContracts)
    // {
    //     fireEvent.click(button)
    // }
    // let allShowLessButtons=getAllByText(/show less/i)
    // expect(allShowLessButtons.length).toEqual(5)
})

test('renders list of tours api',async ()=>
{
    let {findAllByRole}=render(<Tours/>)
    let tourPackages=await findAllByRole(/tour-package/i)
    expect(tourPackages).toHaveLength(5)
})