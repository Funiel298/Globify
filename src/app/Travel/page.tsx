import VerticalScroll from "@/components/VerticalScroll/page"

export default function Travel(){

    let cities = [
        {
            image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT40RosIaOSm9X8MXRiny8U_r7CLMPin7obnxqkeGiGk_jOSsxbXgZqnpyANv6TlA7KwgsfiAqJ__zT0yrnABCDBoDb3-9yBufE1kShpw',
            name: 'Oslo',
        },
        {
            image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRzmvvVa9OXyvCO_kxhod1NWNf8D4S9a1y6yz1SJNBHv35ynBWolOD9qiKBa1s9_IjZESCFqodWFHhktQGZONJQyNxtdhjaLq1PCmgZEg',
            name: 'Bergen',
        },
        {
            image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQayczFnYLHxE2ZVSKF28KOT8JM7FpQ-KQqTyBncIVpZ5km2XaM-_wjB2fkROKFjZEwpXpbGhsHumTFtaR7Z_9CkSo9L5giwbk6NoIvEw',
            name: 'Tromsø',
        },
        {
            image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR6O8xdNvy3vFBg3BP05khFURDhYniuypAhrwJPx0wo6Q4fpyAQr2bq62LUO40a9TP14266iZEYVDhMPB-f6eJcFSF1KKQfe5ezANNREA',
            name: 'Trondhjem',
        },
        {
            image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSEBt6rz8I88qv2exljBu8Y6pDp2-pctCD1XFUY86vJlEf-EC6m5p-fFdGTNFT1zFvqBuHhx3pn85CfdQ2TcxcXzY3bGcTtIVRSpa-FxQ',
            name: 'Stavanger',
        },
        {
            image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSvYrR6_BqA6Q23F0pIE9Rc3gui_zT94AWzX-jfX5oGBuLpXk-gzD3SZfeO86e2k7fEWHo9LNcrHCJVm_aCU18Yoa48kBQLRW2q42r0YA',
            name: 'Ålesund',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRZFmQOE4KqxDlHfNT3vV91atjgCJ6he581DFITlMgysyfdSZOgp2eFR3LEpHrHwNYQDOSHUMJHl8jk514na9PaA2vHiHRmW5nXZvf29A',
            name: 'Geirangerfjorden',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRrKqe50DdHejb3tLXL7eTHmwqViCHF4Irzg2WTXK56r3prG5sK7ydOMhdiCNhnwGJhlLMFU0zbDc8lQYrxxTtxkF-HaBPz47wVmFPKHg',
            name: 'Flåm',
        },
        {
            image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRD9khlsI9eZH1tId0Ufjr_KcPoeuhNssegtpEjMMGr_sFFtSxAmG0lL1gf17CNiYBx1SrxiAITYlXx6tCB2M6ONVe-ZHEL-bPgbyL1fQ',
            name: 'Geiranger',
        },
    ]

    return(
        <div>
            <VerticalScroll sources={cities} sign={"Learn More"} />
        </div>
    )
}