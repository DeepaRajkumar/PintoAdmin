import SideBar from "../GeneralComponent/SideBar"
import HeaderBar from "../GeneralComponent/HeaderBar"
function Merchant() {
    const stats = [
      { label: 'Live Orders', value: '50', change: '10% Increased', color: 'text-blue-600', border: 'border-blue-300' },
      { label: 'Completed', value: '1.5k', change: '10% Decreased', color: 'text-green-600', border: 'border-green-300' },
      { label: 'Cancelled', value: '05', change: '10% Decreased', color: 'text-red-600', border: 'border-red-300' },
      {
        id: 4,
        value: '10',
        label: 'Delayed',
        change: '10% Decreased',
        color: 'text-red-800',
        border: 'border-red-800',
        iconColor: 'text-purple-500'
      },
      { label: 'Total Orders', value: '1052', subLabel: '01 - 07 Sep,24', color: 'text-indigo-600', border: 'border-indigo-300' },
      { label: 'Order Ratio', value: '20', change: '10% Decreased', color: 'text-pink-600', border: 'border-pink-300' },
    ];
  
    return (
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        <Sidebar />
        <div className="flex-grow flex flex-col overflow-hidden">
          <Tail name={"Orders"} />
          <div className="flex-grow overflow-auto">
            <div className="p-4">
              <div className="flex justify-between space-x-4 mb-4">
                {stats.map((stat, index) => (
                  <OrderStats
                    border={stat.border}
                    key={index}
                    color={stat.color}
                    value={stat.value}
                    label={stat.label}
                    subLabel={stat.subLabel}
                    status={stat.change}
                  />
                ))}
              </div>
              <Search />
              <div className="mt-4">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Merchant;