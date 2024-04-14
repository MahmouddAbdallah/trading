import proptTypes from 'prop-types'

export const MenuIcon = ({ className }) => {
    return (
        <svg stroke="currentColor" className={className} fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path></svg>
    )
}

MenuIcon.propTypes = {
    className: proptTypes.string
}
export const CloseIcon = ({ className }) => {
    return (
        <svg stroke="currentColor" className={className} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
    )
}

CloseIcon.propTypes = {
    className: proptTypes.string
}
export const HomeIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="18" height="20" viewBox="0 0 18 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 6.60329L9 0.25L18 6.60329V19.4105H10.4211V14.6737H7.57895V19.4105H0V6.60329ZM12.3158 17.5158H16.1053V7.58618L9 2.57105L1.89474 7.58618V17.5158H5.68421V12.7789H12.3158V17.5158ZM6.15789 8.51579C6.15789 6.94967 7.43388 5.67368 9 5.67368C10.5661 5.67368 11.8421 6.94671 11.8421 8.51579C11.8421 10.0819 10.5661 11.3579 9 11.3579C7.43388 11.3579 6.15789 10.0819 6.15789 8.51579ZM7.57895 8.51579C7.57895 9.30033 8.21546 9.93684 9 9.93684C9.78454 9.93684 10.4211 9.30033 10.4211 8.51579C10.4211 7.73125 9.78454 7.09474 9 7.09474C8.21546 7.09474 7.57895 7.73125 7.57895 8.51579Z" />
        </svg>
    )
}

HomeIcon.propTypes = {
    className: proptTypes.string
}
export const ArrowIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path d="M1 1.5L5.5 6L1 10.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

ArrowIcon.propTypes = {
    className: proptTypes.string
}
export const ArrowRightIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="15" height="14" viewBox="0 0 15 14" fill="none">
            <path d="M7.32715 0.821289L13.8002 7.0001L7.32715 13.1789" stroke="white" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.8001 7L1.2002 7Z" fill="white" />
            <path d="M13.8001 7L1.2002 7" stroke="white" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

ArrowRightIcon.propTypes = {
    className: proptTypes.string
}
export const WalletIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="22" height="18" viewBox="0 0 22 18" fill="none">
            <path d="M17.75 8.75C17.75 9.01522 17.6446 9.26957 17.4571 9.45711C17.2696 9.64464 17.0152 9.75 16.75 9.75C16.4848 9.75 16.2304 9.64464 16.0429 9.45711C15.8554 9.26957 15.75 9.01522 15.75 8.75C15.75 8.48478 15.8554 8.23043 16.0429 8.04289C16.2304 7.85536 16.4848 7.75 16.75 7.75C17.0152 7.75 17.2696 7.85536 17.4571 8.04289C17.6446 8.23043 17.75 8.48478 17.75 8.75Z" fill="#003966" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8.694 0H11.806C13.644 0 15.1 1.19209e-07 16.239 0.153C17.411 0.311 18.36 0.643 19.109 1.391C20.033 2.316 20.328 3.554 20.435 5.161C21.012 5.414 21.448 5.951 21.495 6.631C21.5 6.692 21.5 6.757 21.5 6.817V10.683C21.5 10.743 21.5 10.808 21.496 10.868C21.448 11.548 21.012 12.086 20.435 12.34C20.328 13.946 20.033 15.184 19.109 16.109C18.36 16.857 17.411 17.189 16.239 17.347C15.099 17.5 13.644 17.5 11.806 17.5H8.694C6.856 17.5 5.4 17.5 4.261 17.347C3.089 17.189 2.14 16.857 1.391 16.109C0.643 15.36 0.311 14.411 0.153 13.239C0 12.099 0 10.644 0 8.806V8.694C0 6.856 0 5.4 0.153 4.261C0.311 3.089 0.643 2.14 1.391 1.391C2.14 0.643 3.089 0.311 4.261 0.153C5.401 1.19209e-07 6.856 0 8.694 0ZM18.918 12.5H16.98C14.835 12.5 12.999 10.872 12.999 8.75C12.999 6.628 14.835 5 16.979 5H18.917C18.803 3.659 18.546 2.95 18.047 2.452C17.624 2.029 17.044 1.775 16.038 1.64C15.011 1.502 13.656 1.5 11.749 1.5H8.749C6.842 1.5 5.488 1.502 4.459 1.64C3.454 1.775 2.874 2.029 2.451 2.452C2.028 2.875 1.774 3.455 1.639 4.461C1.501 5.489 1.499 6.843 1.499 8.75C1.499 10.657 1.501 12.012 1.639 13.04C1.774 14.045 2.028 14.625 2.451 15.048C2.874 15.471 3.454 15.725 4.46 15.86C5.488 15.998 6.842 16 8.749 16H11.749C13.656 16 15.011 15.998 16.039 15.86C17.044 15.725 17.624 15.471 18.047 15.048C18.546 14.55 18.804 13.842 18.918 12.5ZM4 4.75C4 4.55109 4.07902 4.36032 4.21967 4.21967C4.36032 4.07902 4.55109 4 4.75 4H8.75C8.94891 4 9.13968 4.07902 9.28033 4.21967C9.42098 4.36032 9.5 4.55109 9.5 4.75C9.5 4.94891 9.42098 5.13968 9.28033 5.28033C9.13968 5.42098 8.94891 5.5 8.75 5.5H4.75C4.55109 5.5 4.36032 5.42098 4.21967 5.28033C4.07902 5.13968 4 4.94891 4 4.75ZM19.674 6.5H16.98C15.556 6.5 14.499 7.559 14.499 8.75C14.499 9.941 15.556 11 16.979 11H19.697C19.903 10.987 19.992 10.848 19.999 10.764V6.736C19.992 6.652 19.903 6.513 19.697 6.501L19.674 6.5Z" fill="#003966" />
        </svg>
    )
}

WalletIcon.propTypes = {
    className: proptTypes.string
}
export const OrdersIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M13.371 15.827L16.211 13.031L15.585 12.404L13.371 14.587L12.415 13.612L11.788 14.244L13.371 15.827ZM2.77 4.73H13.232V3.73H2.769L2.77 4.73ZM14 18.115C12.886 18.115 11.9407 17.727 11.164 16.951C10.3873 16.175 9.99933 15.2297 10 14.115C10 13.0017 10.388 12.0567 11.164 11.28C11.94 10.5033 12.8853 10.115 14 10.115C15.114 10.115 16.0593 10.5033 16.836 11.28C17.6127 12.0567 18.0007 13.0017 18 14.115C18 15.2297 17.612 16.175 16.836 16.951C16.0587 17.727 15.1133 18.115 14 18.115ZM0 16.77V1.615C0 1.16833 0.157333 0.787333 0.472 0.472C0.786667 0.157333 1.16767 0 1.615 0H14.385C14.8317 0 15.2127 0.157333 15.528 0.472C15.8427 0.786667 16 1.16767 16 1.615V7.56C15.8373 7.5 15.6757 7.44867 15.515 7.406C15.355 7.36333 15.1833 7.33 15 7.306V1.616C15 1.462 14.936 1.32067 14.808 1.192C14.6793 1.064 14.5383 1 14.385 1H1.615C1.46167 1 1.32067 1.064 1.192 1.192C1.064 1.32067 1 1.46167 1 1.615V15.05H7.344C7.38933 15.3233 7.448 15.5907 7.52 15.852C7.59267 16.1133 7.69367 16.3627 7.823 16.6L7.788 16.635L6.654 15.808L5.308 16.769L3.962 15.808L2.615 16.769L1.269 15.808L0 16.77ZM2.77 12.27H7.479C7.51633 12.0867 7.56233 11.915 7.617 11.755C7.67233 11.595 7.73667 11.4333 7.81 11.27H2.77V12.27ZM2.77 8.501H10.08C10.4067 8.243 10.7567 8.028 11.13 7.856C11.5033 7.68333 11.9023 7.565 12.327 7.501H2.769L2.77 8.501Z" fill="#003966" />
        </svg>
    )
}
OrdersIcon.propTypes = {
    className: proptTypes.string
}
export const ReportIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M5 15V13M8 15V11M11 15V9M13 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8.586C8.8512 1.00006 9.10551 1.10545 9.293 1.293L14.707 6.707C14.8946 6.89449 14.9999 7.1488 15 7.414V17C15 17.5304 14.7893 18.0391 14.4142 18.4142C14.0391 18.7893 13.5304 19 13 19Z" stroke="#003966" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
ReportIcon.propTypes = {
    className: proptTypes.string
}
export const BusinessIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="21" height="18" viewBox="0 0 21 18" fill="none">
            <path d="M19.6875 2.625H15.75V1.3125C15.75 0.588281 15.1617 0 14.4375 0H6.5625C5.83828 0 5.25 0.588281 5.25 1.3125V2.625H1.3125C0.588281 2.625 0 3.21328 0 3.9375V15.75C0 16.4742 0.588281 17.0625 1.3125 17.0625H19.6875C20.4117 17.0625 21 16.4742 21 15.75V3.9375C21 3.21328 20.4117 2.625 19.6875 2.625ZM6.5625 1.3125H14.4375V2.625H6.5625V1.3125ZM19.6875 15.75H1.3125V10.5H8.53125V11.1562C8.53125 11.8805 9.11953 12.4688 9.84375 12.4688H11.1562C11.8805 12.4688 12.4688 11.8805 12.4688 11.1562V10.5H19.6875V15.75ZM9.84375 11.1562V8.53125H11.1562V11.1562H9.84375ZM12.4688 9.1875V8.53125C12.4688 7.80703 11.8805 7.21875 11.1562 7.21875H9.84375C9.11953 7.21875 8.53125 7.80703 8.53125 8.53125V9.1875H1.3125V3.9375H19.6875V9.1875H12.4688Z" fill="#003966" />
        </svg>
    )
}
BusinessIcon.propTypes = {
    className: proptTypes.string
}
export const LoadingIcon = ({ className }) => {
    return (
        <svg stroke="currentColor" className={className} fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
    )
}
LoadingIcon.propTypes = {
    className: proptTypes.string
}
export const EmailIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.62619 6.39212L2.75975 6.24186C3.24925 5.72998 3.9785 5.47388 4.94683 5.47388H21.5419C22.4545 5.47388 23.1557 5.69659 23.6456 6.14169L23.6623 6.15838C23.7624 6.24754 23.8629 6.35305 23.9628 6.47559C23.9628 6.48695 23.9684 6.49797 23.9795 6.50899L23.9962 6.52568C24.3638 6.98213 24.5471 7.62757 24.5471 8.46233V17.9119C24.5361 19.9153 23.5344 20.917 21.5419 20.917H4.94683C2.95442 20.906 1.95837 19.9043 1.95837 17.9119V8.46233C1.95837 7.56079 2.18109 6.87061 2.62619 6.39212ZM22.0929 7.11002C21.9259 7.06561 21.7423 7.04858 21.5423 7.05993H4.94683C4.82429 7.04891 4.70742 7.05425 4.59623 7.07663L13.1943 15.7916L22.0929 7.11002ZM3.54443 8.27869C3.53341 8.33445 3.53341 8.39555 3.54443 8.46233V17.9119C3.54443 18.8582 4.01189 19.331 4.94683 19.331H21.5419C22.4879 19.331 22.961 18.8582 22.961 17.9119V8.47903L13.7452 17.4778C13.5783 17.6337 13.3893 17.7115 13.1779 17.7115C12.9552 17.7005 12.7659 17.6224 12.6103 17.4778L3.54443 8.27869Z" fill="#285D89" />
            <path fillRule="evenodd" clipRule="evenodd" d="M2.62622 6.39196C2.64859 6.35857 2.67631 6.32518 2.7097 6.29178C2.72105 6.26941 2.73741 6.25272 2.75978 6.2417L2.62622 6.39196Z" fill="#285D89" />
        </svg>)
}
EmailIcon.propTypes = {
    className: proptTypes.string
}
export const PayPalIcon = ({ className }) => {
    return (

        <svg width="51" height="14" className={className} viewBox="0 0 51 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.24173 1.35342C8.86939 1.00345 8.42322 0.735975 7.93394 0.569453C7.44468 0.402931 6.92397 0.341327 6.40778 0.388863H2.65421C2.52302 0.391338 2.39686 0.438147 2.29749 0.521208C2.19811 0.604287 2.13176 0.718395 2.10994 0.843842L0.439598 10.453C0.434286 10.499 0.439091 10.5456 0.453674 10.5896C0.468256 10.6337 0.492298 10.6741 0.524222 10.7085C0.556128 10.7429 0.595202 10.7703 0.638838 10.7891C0.682473 10.8078 0.729711 10.8173 0.777419 10.8169H2.65421C2.76647 10.8122 2.87475 10.7751 2.96504 10.7103C3.05535 10.6453 3.12357 10.5558 3.16094 10.453L3.57383 7.83227C3.58778 7.70688 3.64922 7.59077 3.74631 7.50688C3.84339 7.4228 3.96918 7.37657 4.09933 7.3773H5.31924C5.85886 7.43772 6.40553 7.39004 6.92525 7.2368C7.44499 7.08356 7.92666 6.82841 8.34032 6.487C8.75401 6.14558 9.09082 5.72536 9.32984 5.25237C9.56885 4.77937 9.70496 4.26379 9.72969 3.73747C9.83543 3.32981 9.8465 2.90455 9.7621 2.49227C9.67772 2.07998 9.49999 1.69099 9.24173 1.35342ZM6.85821 3.88306C6.65176 5.2298 5.58199 5.2298 4.56853 5.2298H3.98672L4.38085 2.70015C4.39369 2.62608 4.43239 2.55853 4.49047 2.50883C4.54856 2.45914 4.6225 2.4303 4.6999 2.42717H4.96265C5.65706 2.42717 6.33271 2.42717 6.65176 2.80935C6.76859 2.96107 6.84796 3.13679 6.88375 3.32289C6.91954 3.50907 6.91079 3.70071 6.85821 3.88306Z" fill="#253B80" />
            <path d="M18.0063 3.8275H16.1295C16.0531 3.83151 15.9797 3.85808 15.9195 3.90376C15.859 3.94926 15.8144 4.0115 15.7917 4.08229V4.61007L15.6603 4.40988C15.3761 4.13271 15.031 3.92141 14.6508 3.7922C14.2703 3.66298 13.8648 3.61894 13.4644 3.66371C12.4377 3.68683 11.4537 4.06719 10.6922 4.73546C9.93078 5.40373 9.44255 6.31515 9.3167 7.30354C9.22177 7.78891 9.2346 8.2883 9.35434 8.76839C9.47408 9.24848 9.69798 9.69837 10.0111 10.088C10.3047 10.4032 10.6688 10.6489 11.0753 10.8067C11.482 10.9645 11.9204 11.0298 12.3571 10.998C12.8329 11.0029 13.3049 10.9135 13.7439 10.7352C14.1827 10.5566 14.5794 10.2931 14.9096 9.96062V10.4884C14.9041 10.5725 14.9325 10.6553 14.9882 10.7195C15.0441 10.7839 15.1235 10.8251 15.2099 10.8342H16.8802C17.0106 10.84 17.1386 10.7985 17.2392 10.7177C17.3398 10.6371 17.4059 10.5228 17.4245 10.3974L18.4192 4.19149C18.4402 4.13689 18.4439 4.07756 18.4299 4.02078C18.4158 3.96418 18.3844 3.91286 18.34 3.87373C18.2955 3.8346 18.2399 3.80912 18.1804 3.80093C18.1209 3.79274 18.0601 3.80203 18.0063 3.8275ZM13.3143 9.08706C13.0848 9.09943 12.8554 9.0634 12.6417 8.98186C12.4277 8.90015 12.2348 8.77458 12.0756 8.61388C11.9384 8.42916 11.8412 8.2195 11.7896 7.99747C11.738 7.77545 11.7331 7.54559 11.7753 7.32174C11.8346 6.82454 12.079 6.36538 12.4624 6.03033C12.846 5.69528 13.3423 5.50747 13.8586 5.50183C14.0911 5.49163 14.3231 5.53204 14.5376 5.6203C14.7519 5.70839 14.9432 5.84215 15.0973 6.0114C15.2508 6.18411 15.3596 6.38958 15.4152 6.61106C15.4707 6.83255 15.4711 7.06368 15.4163 7.28534C15.3602 7.78564 15.1138 8.24753 14.7249 8.58076C14.336 8.91398 13.833 9.09452 13.3143 9.08706Z" fill="#253B80" />
            <path d="M27.8779 3.82755H26.0012C25.9116 3.82646 25.8231 3.84775 25.7442 3.88906C25.6654 3.93056 25.5988 3.99079 25.5507 4.06414L22.9795 7.70397L21.891 4.15513C21.8557 4.04612 21.7861 3.95058 21.6917 3.88215C21.5975 3.81354 21.4834 3.77532 21.3655 3.77295H19.4887C19.4371 3.77277 19.3861 3.7846 19.3401 3.80771C19.2941 3.83082 19.2547 3.86449 19.2252 3.90562C19.1956 3.94693 19.1768 3.99444 19.1704 4.0443C19.164 4.09398 19.1702 4.14458 19.1884 4.19153L21.2341 10.0881L19.3573 12.7451C19.3226 12.7917 19.3018 12.8467 19.2973 12.904C19.2928 12.9612 19.305 13.0187 19.3322 13.0696C19.3594 13.1206 19.4009 13.1633 19.4517 13.1928C19.5026 13.2223 19.561 13.2374 19.6201 13.2365H21.4969C21.5851 13.2414 21.6731 13.2238 21.7521 13.1855C21.8311 13.1471 21.8985 13.0895 21.9473 13.0181L28.1407 4.26433C28.1621 4.21938 28.1718 4.16987 28.1692 4.12037C28.1666 4.07087 28.152 4.02283 28.1262 3.97988C28.1003 3.93711 28.0645 3.90089 28.0213 3.8745C27.978 3.84793 27.929 3.83192 27.8779 3.82755Z" fill="#253B80" />
            <path d="M36.8865 1.35272C36.5134 1.00376 36.0671 0.736938 35.578 0.570489C35.0889 0.404021 34.5687 0.341835 34.0526 0.38817H30.1676C30.0395 0.387824 29.916 0.434559 29.8219 0.518985C29.7279 0.60341 29.6703 0.719231 29.6609 0.843149L28.0656 10.4522C28.0602 10.4983 28.0651 10.5449 28.0797 10.5889C28.0942 10.6329 28.1184 10.6735 28.1503 10.7079C28.1822 10.7421 28.2212 10.7696 28.2648 10.7884C28.3085 10.8071 28.3556 10.8166 28.4035 10.8162H30.3929C30.4829 10.8124 30.5685 10.7771 30.634 10.7168C30.6995 10.6568 30.7404 10.5758 30.7494 10.4886L31.1999 7.74055C31.2175 7.61661 31.2802 7.50287 31.3765 7.41952C31.4726 7.33617 31.5962 7.28885 31.7254 7.28557H32.964C33.5027 7.34072 34.0471 7.28903 34.5646 7.13379C35.082 6.97855 35.5615 6.72304 35.9739 6.38271C36.3864 6.04221 36.7233 5.62417 36.964 5.15372C37.2046 4.68328 37.3443 4.17024 37.3745 3.64574C37.4578 3.25155 37.4575 2.84484 37.3736 2.45061C37.2897 2.05638 37.1239 1.68284 36.8865 1.35272ZM34.4842 3.93693C34.2966 5.28367 33.2268 5.28367 32.1946 5.28367H31.6128L32.0257 2.75406C32.0279 2.71579 32.0382 2.67835 32.0555 2.6439C32.0728 2.60947 32.097 2.57867 32.1266 2.5533C32.1563 2.52793 32.1908 2.5085 32.2282 2.4961C32.2657 2.48371 32.3051 2.4786 32.3447 2.48107H32.6262C33.3206 2.48107 33.9775 2.48107 34.3153 2.86325C34.4174 3.01132 34.4854 3.17912 34.5145 3.35492C34.5437 3.53091 34.5334 3.71071 34.4842 3.88233V3.93693Z" fill="#488EB0" />
            <path d="M45.6321 3.82837H43.7553C43.6772 3.82637 43.601 3.85076 43.5395 3.89716C43.4779 3.94375 43.4347 4.00927 43.4175 4.08316V4.61093L43.2861 4.41074C43.0065 4.13266 42.6649 3.92064 42.2873 3.79125C41.9097 3.66185 41.5065 3.61853 41.109 3.66458C40.0822 3.68769 39.0982 4.06805 38.3368 4.73614C37.5754 5.40442 37.0871 6.31601 36.9613 7.30441C36.856 7.78941 36.8637 8.29098 36.984 8.77271C37.1041 9.25445 37.3335 9.70396 37.6557 10.0889C37.9446 10.4046 38.3051 10.6512 38.709 10.8092C39.1127 10.967 39.5488 11.032 39.9829 10.9988C40.4615 11.003 40.936 10.9133 41.3778 10.7349C41.8198 10.5568 42.2199 10.2936 42.5541 9.96148V10.4893C42.5487 10.5328 42.553 10.577 42.5667 10.6188C42.5802 10.6607 42.6029 10.6993 42.6332 10.7319C42.6634 10.7646 42.7003 10.7906 42.7416 10.8085C42.7831 10.8263 42.828 10.8352 42.8732 10.835H44.5435C44.6708 10.8363 44.7943 10.7926 44.8909 10.7124C44.9876 10.6319 45.0508 10.5204 45.069 10.3983L45.9887 4.19235C45.998 4.14413 45.9954 4.09444 45.9812 4.04749C45.9669 4.00035 45.9412 3.9574 45.9065 3.92173C45.8716 3.88624 45.8286 3.85931 45.7809 3.84293C45.733 3.82673 45.6822 3.82164 45.6321 3.82837ZM40.9589 9.08792C40.7263 9.10157 40.4938 9.06645 40.2767 8.98473C40.0597 8.90302 39.8634 8.7769 39.7014 8.61475C39.5635 8.43057 39.4672 8.22037 39.4186 7.99779C39.3702 7.77504 39.3706 7.545 39.4199 7.32261C39.471 6.82541 39.7103 6.36406 40.0914 6.02792C40.4728 5.69178 40.969 5.50469 41.4844 5.50269C41.7233 5.48231 41.9637 5.51834 42.185 5.60788C42.4064 5.69742 42.602 5.83774 42.7551 6.01663C42.9083 6.19553 43.0145 6.40792 43.0644 6.63541C43.1144 6.86271 43.1067 7.09858 43.0421 7.32261C42.9858 7.81635 42.7405 8.27169 42.3548 8.59855C41.9691 8.9254 41.4709 9.09993 40.9589 9.08792Z" fill="#488EB0" />
            <path d="M49.9298 0.333968H48.053C47.9762 0.328744 47.9004 0.352258 47.8411 0.399667C47.7816 0.447076 47.7433 0.514759 47.7339 0.588756L46.2325 10.4527C46.2242 10.4977 46.2263 10.5439 46.2385 10.5879C46.2507 10.632 46.2729 10.6729 46.3035 10.7077C46.3339 10.7425 46.372 10.7703 46.4149 10.7892C46.4577 10.808 46.5045 10.8174 46.5516 10.8167H48.1468C48.2741 10.818 48.3976 10.7743 48.4942 10.694C48.5909 10.6136 48.6541 10.502 48.6723 10.3799L50.2488 0.679752C50.2541 0.636184 50.2498 0.591994 50.2363 0.550155C50.2226 0.508315 50.1998 0.469751 50.1698 0.437047C50.1396 0.404343 50.1026 0.378247 50.0612 0.360484C50.0199 0.342704 49.975 0.333676 49.9298 0.333968Z" fill="#488EB0" />
        </svg>
    )
}
PayPalIcon.propTypes = {
    className: proptTypes.string
}
export const PaymentIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="84" height="24" viewBox="0 0 84 24" fill="none">
            <path d="M46.3016 19.0432H43.4079V20.333H46.1953C47.3735 20.333 48.125 19.513 48.125 18.341C48.125 17.169 47.4813 16.583 46.4094 16.583H45.122C44.8016 16.583 44.5875 16.3489 44.5875 15.997C44.5875 15.6451 44.8016 15.411 45.1235 15.411H47.5891L48.125 14.1212H45.2297C44.0516 14.1212 43.3016 14.9413 43.3016 15.997C43.3016 17.169 43.9453 17.755 45.0157 17.755H46.3031C46.6235 17.755 46.8376 17.9891 46.8376 18.341C46.9453 18.8091 46.7313 19.0432 46.3016 19.0432ZM41.05 19.0432H38.1563V20.333H40.9438C42.1219 20.333 42.8719 19.513 42.8719 18.341C42.8719 17.169 42.2282 16.583 41.1578 16.583H39.8704C39.55 16.583 39.3359 16.3489 39.3359 15.997C39.3359 15.6451 39.55 15.411 39.8719 15.411H42.336L42.8719 14.1212H39.9782C38.8 14.1212 38.05 14.9413 38.05 15.997C38.05 17.169 38.6937 17.755 39.7641 17.755H41.0515C41.3719 17.755 41.586 17.9891 41.586 18.341C41.6938 18.8091 41.3719 19.0432 41.05 19.0432ZM37.2985 15.2948V14.005H32.7969V20.2152H37.2985V18.927H34.0844V17.6371H37.1937V16.3489H34.0844V15.177H37.2985V15.2948ZM30.0109 15.2948C30.5469 15.2948 30.761 15.6451 30.761 15.997C30.761 16.3489 30.5469 16.7009 30.0109 16.7009H28.4031V15.177L30.0109 15.2948ZM28.4031 17.9891H29.0469L30.761 20.2152H32.3688L30.4391 17.8712C31.4047 17.6371 31.9406 16.9349 31.9406 15.997C31.9406 14.825 31.1891 14.005 30.0094 14.005H27.0094V20.2152H28.2968L28.4031 17.9891ZM24.9734 16.1132C24.9734 16.583 24.7594 16.9349 24.2234 16.9349H22.5078V15.2932H24.1156C24.6516 15.2932 24.9734 15.6451 24.9734 16.1132ZM21.2219 14.005V20.2152H22.5093V18.1053H24.2234C25.4016 18.1053 26.2594 17.2868 26.2594 15.997C26.2594 14.825 25.5094 13.8871 24.3297 13.8871L21.2219 14.005ZM19.2922 20.2152H20.9L18.65 17.0511L20.9 14.005H19.2937L17.9015 15.997L16.5077 14.005H14.8999L17.1515 17.0511L14.8999 20.0989H16.5077L17.9 18.1069L19.2922 20.2152ZM14.4703 15.2932V14.005H9.96722V20.2152H14.4688V18.927H11.2547V17.6371H14.3625V16.3489H11.2547V15.177H14.4703V15.2932ZM40.5141 7.79318L42.7656 11.5432H44.3734V5.33301H43.086V9.43329L42.7656 8.8473L40.7297 5.33301H39.0141V11.5432H40.3015V7.32504L40.5141 7.79318ZM34.9407 7.67696L35.3703 6.38713L35.7985 7.67696L36.3344 9.08301H34.4047L34.9407 7.67696ZM37.1922 11.5432H38.5844L36.1203 5.33301H34.4047L31.9406 11.5432H33.3329L33.8688 10.255H36.6563L37.1922 11.5432ZM31.1891 11.5432L31.725 10.255H31.4047C30.4391 10.255 29.9032 9.55114 29.9032 8.49702V8.37917C29.9032 7.32504 30.4391 6.6212 31.4047 6.6212H32.7969V5.33301H31.2969C29.5828 5.33301 28.6172 6.6212 28.6172 8.37917V8.49702C28.6172 10.3712 29.5828 11.5432 31.1891 11.5432ZM26.3672 11.5432H27.6531V5.44922H26.3657L26.3672 11.5432ZM23.5797 6.6212C24.1156 6.6212 24.3297 6.97312 24.3297 7.32504C24.3297 7.67696 24.1156 8.02888 23.5812 8.02888H21.9719V6.50335L23.5797 6.6212ZM21.9734 9.31871H22.6171L24.3312 11.5448H25.939L24.0094 9.19922C24.9734 8.96516 25.5094 8.26295 25.5094 7.32504C25.5094 6.15307 24.7594 5.33301 23.5797 5.33301H20.5812V11.5432H21.8671L21.9734 9.31871ZM19.6156 6.62284V5.33464H15.114V11.5448H19.6156V10.2566H16.4V8.96679H19.5093V7.6786H16.4V6.50335H19.6156V6.61956V6.62284ZM9.86243 11.5448H11.0421L12.6484 6.50662V11.5448H13.9358V5.33301H11.7921L10.5047 9.55114L9.21871 5.33301H7.07346V11.5432H8.36091V6.50499L9.86093 11.5432L9.86243 11.5448ZM2.89376 7.67696L3.3234 6.38713L3.75156 7.67696L4.28749 9.08301H2.35782L2.89376 7.67696ZM5.14529 11.5432H6.53753L4.07342 5.33301H2.46561L0 11.5432H1.39224L1.92967 10.255H4.71564L5.14529 11.5432Z" fill="#458DAE" />
            <path d="M74.5625 22.75H68.5625C63.1325 22.75 60.8125 20.43 60.8125 15V9C60.8125 3.57 63.1325 1.25 68.5625 1.25H70.5625C70.9725 1.25 71.3125 1.59 71.3125 2C71.3125 2.41 70.9725 2.75 70.5625 2.75H68.5625C63.9525 2.75 62.3125 4.39 62.3125 9V15C62.3125 19.61 63.9525 21.25 68.5625 21.25H74.5625C79.1725 21.25 80.8125 19.61 80.8125 15V13C80.8125 12.59 81.1525 12.25 81.5625 12.25C81.9725 12.25 82.3125 12.59 82.3125 13V15C82.3125 20.43 79.9925 22.75 74.5625 22.75Z" fill="#458DAE" />
            <path d="M68.0628 17.6901C67.4528 17.6901 66.8928 17.4701 66.4828 17.0701C65.9928 16.5801 65.7828 15.8701 65.8928 15.1201L66.3228 12.1101C66.4028 11.5301 66.7828 10.7801 67.1928 10.3701L75.0728 2.49006C77.0628 0.500059 79.0828 0.500059 81.0728 2.49006C82.1628 3.58006 82.6528 4.69006 82.5528 5.80006C82.4628 6.70006 81.9828 7.58006 81.0728 8.48006L73.1928 16.3601C72.7828 16.7701 72.0328 17.1501 71.4528 17.2301L68.4428 17.6601C68.3128 17.6901 68.1828 17.6901 68.0628 17.6901ZM76.1328 3.55006L68.2528 11.4301C68.0628 11.6201 67.8428 12.0601 67.8028 12.3201L67.3728 15.3301C67.3328 15.6201 67.3928 15.8601 67.5428 16.0101C67.6928 16.1601 67.9328 16.2201 68.2228 16.1801L71.2328 15.7501C71.4928 15.7101 71.9428 15.4901 72.1228 15.3001L80.0028 7.42006C80.6528 6.77006 80.9928 6.19006 81.0428 5.65006C81.1028 5.00006 80.7628 4.31006 80.0028 3.54006C78.4028 1.94006 77.3028 2.39006 76.1328 3.55006Z" fill="#458DAE" />
            <path d="M79.4121 9.82978C79.3421 9.82978 79.2721 9.81978 79.2121 9.79978C76.5821 9.05978 74.4921 6.96978 73.7521 4.33978C73.6421 3.93978 73.8721 3.52978 74.2721 3.40978C74.6721 3.29978 75.0821 3.52978 75.1921 3.92978C75.7921 6.05978 77.4821 7.74978 79.6121 8.34978C80.0121 8.45978 80.2421 8.87978 80.1321 9.27978C80.0421 9.61978 79.7421 9.82978 79.4121 9.82978Z" fill="#458DAE" />
        </svg>
    )
}
PaymentIcon.propTypes = {
    className: proptTypes.string
}
export const CartIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className={className} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
    )
}
CartIcon.propTypes = {
    className: proptTypes.string
}
export const SuccessfullyIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    )
}
SuccessfullyIcon.propTypes = {
    className: proptTypes.string
}
export const PhoneIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="25" viewBox="0 0 24 25" fill="none">
            <g clipPath="url(#clip0_44_1768)">
                <path d="M12.8531 6.91976C14.0273 7.12133 15.1007 7.67679 15.9562 8.52992C16.807 9.3807 17.3648 10.4541 17.5664 11.6307C17.6437 12.0948 18.0422 12.4299 18.5132 12.4299C18.5742 12.4299 18.6281 12.4229 18.6656 12.4159C18.6679 12.4159 18.6703 12.4159 18.6726 12.4135C18.9281 12.3713 19.1507 12.233 19.2984 12.0198C19.4461 11.8088 19.5023 11.5557 19.4578 11.3049C19.1906 9.73461 18.45 8.30492 17.3132 7.1682C16.1718 6.03148 14.7398 5.29086 13.1718 5.02601H13.1695C12.6468 4.9393 12.1523 5.2932 12.0656 5.81351C11.9836 6.33851 12.3351 6.83304 12.8531 6.91976V6.91976Z" fill="#285D89" />
                <path d="M18.7617 14.9656C18.2367 14.4195 17.6015 14.1312 16.9242 14.1312C16.2538 14.1312 15.614 14.4148 15.0773 14.9539L13.7437 16.2875C13.7109 16.2711 13.6781 16.2547 13.6476 16.2383L13.5796 16.2055C13.4367 16.1328 13.2726 16.0508 13.1367 15.9664C11.7679 15.0969 10.5187 13.9578 9.31401 12.4813C8.79838 11.832 8.43744 11.2813 8.1726 10.7328C8.50776 10.4164 8.81947 10.1 9.11244 9.8C9.17807 9.73437 9.24369 9.66641 9.31166 9.59844C9.37729 9.53047 9.44526 9.4625 9.51322 9.39453C10.071 8.83672 10.3663 8.18984 10.364 7.52422C10.364 6.86094 10.0687 6.21641 9.51322 5.66328L8.21713 4.36719C8.14213 4.29219 8.06713 4.21719 7.99447 4.14219C7.92182 4.06719 7.84682 3.99219 7.77416 3.91953L7.67104 3.81406C7.41557 3.55391 7.15072 3.28438 6.88354 3.03828C6.36322 2.52031 5.73276 2.24609 5.06479 2.24609C4.39916 2.24609 3.76401 2.52031 3.2226 3.03828C3.22026 3.04063 3.21791 3.04062 3.21791 3.04297L1.59369 4.66484C0.930411 5.32812 0.553067 6.13672 0.471036 7.06719V7.06953C0.384317 8.17109 0.583536 9.33359 1.09916 10.7281C1.87963 12.8375 3.05151 14.7922 4.78354 16.8781C6.8976 19.3977 9.43588 21.3852 12.3257 22.7844H12.3281C13.4413 23.3164 14.9367 23.9398 16.6242 24.05C16.6265 24.05 16.6288 24.05 16.6312 24.05H16.6429C16.739 24.0547 16.8398 24.0594 16.9453 24.0594C18.1288 24.0594 19.1273 23.6305 19.9101 22.7844L19.9218 22.7727C19.9312 22.7633 19.9382 22.7563 19.9453 22.7469C20.1796 22.4656 20.4492 22.2055 20.7515 21.9148C20.9601 21.7156 21.1734 21.5117 21.3796 21.2914C21.9117 20.7359 22.1929 20.0891 22.1906 19.4211C22.1882 18.7508 21.9023 18.1109 21.3632 17.5719L18.7617 14.9656V14.9656ZM18.5038 21.4977C18.0867 21.943 17.6085 22.1422 16.957 22.1422C16.896 22.1422 16.8281 22.1375 16.7578 22.1328C15.4078 22.0461 14.1304 21.5117 13.1695 21.0547C10.5163 19.7773 8.19135 17.9586 6.25776 15.6477C4.67572 13.7422 3.60932 11.9656 2.90385 10.0625C2.48197 8.93047 2.3226 8.05391 2.38822 7.22656C2.43041 6.74375 2.61088 6.35938 2.95541 6.01953L4.56791 4.40703C4.73666 4.24531 4.9101 4.15859 5.07182 4.15859C5.22416 4.15859 5.38588 4.24297 5.55697 4.40938C5.55932 4.41172 5.56166 4.41406 5.56401 4.41641C5.84291 4.67891 6.11479 4.95547 6.40307 5.24609L6.41244 5.25547C6.55072 5.39844 6.7101 5.5625 6.87182 5.71953L8.16557 7.01328C8.54291 7.39062 8.54291 7.65547 8.16557 8.03281C8.02963 8.16875 7.89135 8.30703 7.75541 8.44766L7.65932 8.54609C7.29604 8.91406 6.95385 9.26094 6.58119 9.59141C6.57651 9.59609 6.56947 9.60078 6.56479 9.60781L6.54135 9.63125C6.14526 10.0273 6.03744 10.5008 6.2226 11.0352C6.22729 11.0492 6.23197 11.0609 6.23666 11.0727C6.23901 11.0797 6.24135 11.0867 6.24604 11.0938C6.59291 11.9305 7.08041 12.725 7.83041 13.6742C7.83041 13.6766 7.83276 13.6766 7.83276 13.6789C9.16401 15.3172 10.5679 16.5969 12.1265 17.5859C12.3304 17.7148 12.5413 17.8227 12.7382 17.9211C12.8835 17.9937 13.0476 18.0781 13.1835 18.1602C13.1929 18.1672 13.2023 18.1719 13.2117 18.1766L13.2187 18.1813C13.2328 18.1883 13.2468 18.1977 13.2632 18.2047C13.4671 18.3078 13.6687 18.357 13.8773 18.357C14.2335 18.357 14.5617 18.2094 14.8265 17.9305L16.4484 16.3086C16.5656 16.1914 16.7484 16.0508 16.9406 16.0508C17.1187 16.0508 17.2921 16.1891 17.4046 16.3063C17.407 16.3086 17.407 16.3086 17.4093 16.3109L20.0273 18.9289C20.2851 19.1867 20.4609 19.4914 20.0062 19.9695L20.0039 19.9719C19.8609 20.1266 19.7085 20.2742 19.5468 20.4313C19.5117 20.4641 19.4765 20.4992 19.4414 20.5344C19.1132 20.8414 18.7992 21.1461 18.5038 21.4977V21.4977Z" fill="#285D89" />
                <path d="M23.5336 11.1174C23.1024 8.57909 21.9024 6.26347 20.0625 4.42362C18.2157 2.58143 15.9 1.38143 13.3594 0.952527C12.8368 0.865809 12.3422 1.21972 12.2555 1.74003C12.1688 2.26268 12.5227 2.75722 13.0407 2.84393C15.1899 3.20956 17.1469 4.22675 18.7032 5.78065C20.2594 7.3369 21.2743 9.29393 21.6399 11.4408C21.7172 11.9049 22.1157 12.24 22.5868 12.24C22.5891 12.24 22.5914 12.24 22.5938 12.24C22.6524 12.24 22.7016 12.233 22.7391 12.226C22.7414 12.226 22.7438 12.226 22.7461 12.2236C23.0016 12.1814 23.2243 12.0432 23.3719 11.8299C23.5219 11.6213 23.5782 11.3682 23.5336 11.1174V11.1174Z" fill="#285D89" />
            </g>
            <defs>
                <clipPath id="clip0_44_1768">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>
    )
}
PhoneIcon.propTypes = {
    className: proptTypes.string
}
export const LocationIcon = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="19" height="24" viewBox="0 0 19 24" fill="none">
            <path d="M9.192 24C8.928 24 8.688 23.88 8.52 23.688C7.656 22.704 0 13.992 0 9.192C0 4.128 4.128 0 9.192 0C14.256 0 18.384 4.128 18.384 9.192C18.384 13.968 10.728 22.704 9.864 23.688C9.696 23.88 9.456 24 9.192 24ZM9.192 1.824C5.136 1.824 1.824 5.136 1.824 9.192C1.824 12.36 6.648 18.672 9.192 21.696C11.736 18.696 16.56 12.36 16.56 9.192C16.56 5.136 13.248 1.824 9.192 1.824Z" fill="url(#paint0_linear_44_2425)" />
            <path d="M9.19199 13.9199C6.64798 13.9199 4.58398 11.8559 4.58398 9.31186C4.58398 6.76786 6.64798 4.70386 9.19199 4.70386C11.736 4.70386 13.8 6.76786 13.8 9.31186C13.8 11.8559 11.736 13.9199 9.19199 13.9199ZM9.19199 6.52786C7.65599 6.52786 6.40799 7.77586 6.40799 9.31186C6.40799 10.8479 7.65599 12.0959 9.19199 12.0959C10.728 12.0959 11.976 10.8479 11.976 9.31186C11.976 7.77586 10.728 6.52786 9.19199 6.52786Z" fill="url(#paint1_linear_44_2425)" />
            <defs>
                <linearGradient id="paint0_linear_44_2425" x1="9.192" y1="0" x2="9.192" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#285D89" />
                    <stop offset="1" stopColor="#285D89" />
                </linearGradient>
                <linearGradient id="paint1_linear_44_2425" x1="9.19199" y1="4.70386" x2="9.19199" y2="13.9199" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#285D89" />
                    <stop offset="1" stopColor="#285D89" />
                </linearGradient>
            </defs>
        </svg>
    )
}
LocationIcon.propTypes = {
    className: proptTypes.string
}