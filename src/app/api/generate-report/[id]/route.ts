import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import connectDB from "@/database/MongoDbConnection";
import Budget from "@/models/Budget.model";
import { ASSETS } from '../../../../../public/Assets';


function formatCurrency(amount:any) {
  var formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedAmount;
}

export async function GET(req: NextRequest) {
    const { pathname } = new URL(req.url);
    const slug = pathname.split('/').pop();

    await connectDB();
    try {
        const data = await Budget.find({ owner: slug }).populate('expense');
        const date = new Date();
        const currentDate = date.getDate()
        const month = date.toLocaleString('default', { month: 'long' });
        const totalBudget = data.reduce((acc: number, budget: any) => acc + budget.amount, 0);
        const totalSpent = data.reduce((acc: number, budget: any) => {
          const budgetSpent = budget.expense?.reduce((expenseAcc: number, expense: any) => expenseAcc + expense.amount, 0);
            return acc + budgetSpent;
        }, 0);
        console.log("🚀 ~ totalSpent ~ totalSpent:", totalSpent)
        const remainingAmount = totalBudget - totalSpent;
        console.log("🚀 ~ GET ~ remainingAmount:", remainingAmount)
    
     
        const content = `
        <html>
        <head>
           <style>
         body { font-family: Arial, sans-serif; }
    h1 { color: blue; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 30px;}
    th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
    th { background-color: #f9f9f9; color:black; }
    /* tr:nth-child(odd) { background-color: #f9f9f9; } */
    .firstHeading { text-transform: capitalize;
    text-align: center;
    font-size: 30px;
    }
    /* .statsMain { display: flex; justify-content: space-around; 
        margin: 10px 0px;

    }

    .statsMain div {
        height: 200px ;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px 20px;
        width: 400px;
        border-radius: 10px;
        background-color: #f9f9f9;
    }
    .statsMain div div{
        /* background-color: rgba(0, 0, 0, 0.092); 
        height: 30px;
        width: 30px;
        border-radius: 50%;
        color: white;
    }
    .statsMain div h2{
        font-size: 20px;
        color: rgb(90, 87, 87);
    } */
    h4{
        text-transform: capitalize;
    }

        .statsMain { 
            margin: 40px 0;
        display:flex;
        flex-direction:column;
            }
      
        .statsMain  h3 {
            font-size: 18px;
            color: #666;
            margin-bottom: 10px;
        }
        .statsMain  h4 {
            font-size: 20px;
            color: #333;
        }
        h4 span{
          font-weight:300;
          font-size:18px:
        }
    </style>
        </head>
        <body>
         <div>
     <svg  version="1.0" xmlns="http://www.w3.org/2000/svg"  width="259.000000pt" height="124.000000pt" viewBox="0 0 259.000000 194.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,194.000000) scale(0.100000,-0.100000)" fill="#36bbc4" stroke="none"> <path d="M1525 1280 c-3 -5 -3 -37 1 -70 6 -51 4 -60 -9 -60 -34 0 -67 -24 -75 -54 -19 -74 16 -112 93 -100 l47 7 -7 131 c-5 72 -8 137 -8 144 0 14 -33 16 -42 2z m9 -202 c8 -38 -7 -57 -32 -42 -24 16 -27 45 -6 61 26 19 31 17 38 -19z"/> <path d="M1955 1259 c-9 -14 5 -219 16 -241 19 -36 89 -34 89 3 0 16 -5 19 -19 14 -26 -8 -41 20 -41 74 0 34 3 41 20 41 14 0 20 7 20 24 0 19 -4 23 -20 19 -18 -5 -20 0 -20 36 0 34 -3 41 -19 41 -11 0 -23 -5 -26 -11z"/> <path d="M1059 1258 c0 -2 -3 -60 -6 -130 l-5 -128 54 0 c64 0 85 13 94 57 5 26 1 37 -19 57 -15 14 -35 26 -47 26 -18 0 -20 6 -20 60 0 57 -1 60 -25 60 -14 0 -25 -1 -26 -2z m96 -193 c0 -26 -4 -31 -25 -30 -21 0 -26 5 -28 33 -3 30 -1 32 25 30 24 -2 28 -6 28 -33z"/> <path d="M695 1238 c-77 -4 -146 -10 -152 -13 -7 -2 -13 -16 -13 -30 l0 -26 73 5 c39 3 147 9 240 12 165 6 167 6 167 29 0 37 -45 40 -315 23z"/> <path d="M1797 1160 c-28 -23 -36 -113 -12 -140 23 -25 125 -30 125 -6 0 10 -14 16 -42 18 -31 2 -44 8 -46 21 -3 14 4 17 47 17 57 0 65 8 57 55 -5 24 -14 36 -34 43 -37 14 -71 11 -95 -8z m83 -24 c0 -2 3 -11 6 -20 5 -13 -1 -16 -30 -16 -54 0 -48 37 7 39 9 1 17 -1 17 -3z"/> <path d="M1224 1134 c-10 -55 2 -116 26 -136 29 -24 65 -23 90 2 11 11 22 20 25 20 3 0 5 -9 5 -20 0 -14 7 -20 24 -20 23 0 24 2 19 68 -6 102 -10 112 -37 112 -22 0 -25 -5 -31 -53 -4 -30 -10 -58 -13 -64 -9 -14 -53 -36 -51 -26 1 4 1 41 0 81 -1 69 -2 72 -26 72 -20 0 -25 -6 -31 -36z"/> <path d="M1639 1159 c-27 -10 -49 -45 -49 -78 0 -29 35 -54 70 -49 36 5 44 -4 36 -38 -5 -20 -12 -24 -45 -24 -34 0 -38 -3 -34 -20 4 -16 14 -20 48 -20 69 0 78 16 73 128 -6 98 -12 112 -53 111 -11 0 -32 -5 -46 -10z m49 -56 c-3 -32 -37 -43 -57 -19 -10 11 -8 17 11 30 34 24 50 20 46 -11z"/> <path d="M845 1129 c-88 -4 -193 -7 -234 -8 l-74 -1 6 -75 c3 -41 8 -79 12 -85 7 -11 176 -12 211 -2 12 4 43 35 69 69 25 35 51 65 56 68 5 4 17 -10 26 -30 14 -29 15 -43 6 -75 -10 -37 -9 -40 11 -40 58 1 64 8 71 84 4 40 5 79 4 87 -3 12 -31 13 -164 8z m-190 -40 c-15 -7 -11 -8 15 -3 54 11 180 13 180 3 0 -5 -7 -9 -15 -9 -13 0 -20 -19 -16 -43 1 -5 -2 -6 -6 -4 -5 3 -21 -9 -36 -27 -27 -31 -30 -31 -100 -28 -93 4 -93 4 -101 47 -8 43 4 62 42 68 48 7 58 6 37 -4z m325 -40 c0 -11 -4 -18 -9 -15 -5 4 -11 0 -13 -6 -3 -7 -7 -1 -10 14 -3 15 -1 25 3 22 5 -3 9 0 9 6 0 6 5 8 10 5 6 -3 10 -15 10 -26z"/> <path d="M821 975 c-35 -47 -61 -88 -58 -91 6 -6 53 54 92 116 16 25 30 39 33 32 9 -27 -101 -167 -124 -158 -7 3 -20 -4 -27 -15 -14 -19 -16 -19 -44 -3 -39 23 -78 12 -98 -26 -32 -62 -8 -120 49 -120 41 0 69 23 86 70 16 42 38 70 56 70 17 0 94 88 110 128 14 30 10 82 -5 82 -4 0 -35 -38 -70 -85z m-126 -180 c0 -32 -5 -42 -27 -54 -24 -14 -28 -14 -47 3 -25 23 -26 44 -5 74 12 17 24 22 47 20 30 -3 32 -5 32 -43z"/> <path d="M1756 981 c-4 -5 -4 -36 0 -68 l5 -59 -41 -13 c-47 -14 -72 -55 -63 -104 9 -44 42 -60 105 -50 l53 9 -2 49 c0 28 -4 94 -8 148 -6 85 -9 97 -25 97 -11 0 -21 -4 -24 -9z m14 -215 c0 -39 -11 -50 -40 -41 -23 7 -28 60 -7 68 34 14 47 7 47 -27z"/> <path d="M1552 915 l6 -65 -34 -6 c-39 -7 -74 -45 -74 -79 0 -13 9 -33 19 -46 16 -21 28 -24 76 -23 31 1 60 6 64 10 4 5 3 69 -2 142 -10 132 -10 132 -35 132 -24 0 -25 -1 -20 -65z m14 -139 c8 -34 -2 -47 -34 -44 -21 1 -27 7 -27 23 3 49 50 65 61 21z"/> <path d="M1060 861 c0 -60 -3 -123 -6 -140 l-6 -31 59 0 c67 0 98 16 106 56 9 48 -11 82 -54 95 l-39 12 0 59 c0 58 0 58 -30 58 l-30 0 0 -109z m95 -96 c0 -25 -4 -31 -26 -33 -23 -3 -25 -1 -21 33 4 30 8 36 26 33 16 -2 21 -10 21 -33z"/> <path d="M721 931 c0 -3 4 -14 8 -25 7 -17 8 -17 23 7 16 24 16 25 -8 25 -13 0 -24 -3 -23 -7z"/> <path d="M1846 888 c-28 -108 37 -177 106 -113 25 23 27 23 25 5 -1 -11 -5 -20 -10 -20 -4 0 -6 -4 -2 -10 11 -18 -34 -50 -70 -50 -31 0 -35 -3 -35 -25 0 -23 4 -25 44 -25 80 0 105 44 106 191 l0 66 -30 0 c-29 0 -30 -2 -30 -43 0 -25 -6 -49 -16 -58 -19 -20 -28 -20 -44 -1 -10 12 -10 24 -1 54 15 51 15 51 -13 51 -16 0 -26 -7 -30 -22z"/> <path d="M1246 874 c-18 -47 -2 -147 28 -166 22 -15 66 -8 86 14 l20 22 0 -22 c0 -17 6 -22 25 -22 23 0 25 4 25 44 0 24 -3 64 -6 90 -6 40 -10 46 -30 46 -17 0 -25 -7 -28 -22 -18 -98 -20 -103 -46 -103 -24 0 -25 2 -23 68 2 64 1 67 -21 67 -13 0 -27 -7 -30 -16z"/> <path d="M823 848 c-13 -6 -23 -16 -23 -22 1 -23 40 -97 55 -102 47 -18 93 34 79 90 -10 43 -61 58 -111 34z m78 -29 c12 -24 -2 -69 -21 -69 -25 0 -50 22 -50 43 0 46 50 64 71 26z"/> </g> </svg>
      </div>
      <h2 class="firstHeading">
        Budget report for ${currentDate + " " + month}
      </h2>
      
      <div class="statsMain">
           < div>
            <h3>Total Amount</h3>
            <h4>
                ${"Rs" + formatCurrency(totalBudget)}
              </h4>
           < /div>
           <div>
           
           
           <h3>Total Amount Spend</h3>
        <h4>
                          ${"Rs" + formatCurrency(totalSpent)}
                          
                          </h4>
                          < /div>
                          < div>
                          
                          
                          <h3>Remaining Amount </h3>
                          <h4>
                          ${"Rs" + formatCurrency(remainingAmount)}
                          
                          </h4>
                          </div>

      </div>
      ${data.map((item: any) => `
        <h4><span>Budget Title: </span>${item.title}</h4>
        <h4><span>Budget Amount: </span>${formatCurrency(item.amount)}</h4>
        <table>
            <tr>
                <th>Expense Title</th>
                <th>Date Created</th>
                <th>Amount</th>
            </tr>
            ${
                item.expense.length === 0 ?
                `<tr><td colspan="3">No expenses found in this budget.</td></tr>` :
                item.expense.map((expense: any) => `
                    <tr>
                        <td>${expense.title}</td>
                        <td>${new Date(expense.createdAt).toLocaleDateString()}</td>
                        <td>${formatCurrency(expense.amount)}</td>
                    </tr>`
                ).join('')
            }
        </table>`
    ).join('')}
        </body>
        </html>
        `;

        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();
        await page.setContent(content);
        const pdfBuffer = await page.pdf({ format: 'A4' });
        await browser.close();

        return new NextResponse(pdfBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=budget_report.pdf',
            },
        });

    } catch (error) {
        console.error('Failed to generate PDF:', error);
        return new NextResponse(JSON.stringify({ error: 'Failed to generate PDF' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
