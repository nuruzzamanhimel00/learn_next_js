export default function DashboardLayout({ children, notifications, revenue, user  }){
    
    return (
        <>
            <div>
                {children}
            </div>
            <div style={{display:'flex',
                justifyContent:'space-around'
            }}>
                <div>
                    <div >
                        {user}
                    </div>
                    <div >
                        {revenue}
                    </div>
                </div>
                <div>
                    <div >
                        {notifications}
                    </div>
                </div>
            </div>
        </>
    )
}