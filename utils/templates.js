// SIGN UP
export const signUpTemplate = ({
	userName,
	userEmail,
	userId,
	createdDate,
}) => `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f7fa;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <tr>
            <td style="background-color: #06446b; color:#29ede4; text-align: center;">
                <p style="font-size: 34px; line-height: 34px; font-weight: 800;">WorldWise Inc.</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 40px 30px;">                
                <p style="font-size: 16px; margin-bottom: 25px;">Hello <strong style="color: #06446b;">${userName}</strong>,</p>
                
                <p style="font-size: 16px; margin-bottom: 25px;">Your <strong>Account with WorldWise Inc </strong> has been created successfully today.${createdDate}</p>
                
                <table cellpadding="15" cellspacing="0" border="0" width="100%" style="background-color: #f0f7ff; border-radius: 10px; margin-bottom: 25px;">
                    <tr>
                        <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                            <strong>UserName:</strong> ${userName}
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                            <strong>AccountId:</strong> ${userId}
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px;">
                            <strong>UserEmail:</strong> ${userEmail}
                        </td>
                    </tr>
                </table>
                
                <p style="font-size: 16px; margin-bottom: 25px;">If you'd like to make changes or cancel your subscription, please visit your <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none;">account settings</a> before the renewal date.</p>
                
                <p style="font-size: 16px; margin-top: 30px;">Need help? <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none;">Contact our support team</a> anytime.</p>
                
                <p style="font-size: 16px; margin-top: 30px;">
                    Best regards,<br>
                    <strong>The Worldwise Team</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #f0f7ff; padding: 20px; text-align: center; font-size: 14px;">
                <p style="margin: 0 0 10px;">
                    WorldWise Inc. | 123 Main St, Mountain View Fct.
                </p>
                <p style="margin: 0;">
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Unsubscribe</a> | 
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | 
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Terms of Service</a>
                </p>
            </td>
        </tr>
    </table>
</div>
`;

// SIGN IN
export const signInTemplate = ({ userName, userId }) => `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f7fa;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <tr>
            <td style="background-color: #06446b; color:#29ede4; text-align: center;">
                <p style="font-size: 34px; line-height: 34px; font-weight: 800;">WorldWise Inc.</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 40px 30px;">                
                <p style="font-size: 16px; margin-bottom: 25px;">Dear <strong style="color: #06446b;">${userName}</strong>,</p>
                
                <p style="font-size: 16px; margin-bottom: 25px;">Your <strong>Account with user id ${userId}</strong> was logged into a moment ago.</p>
                
                
                <p style="font-size: 16px; margin-bottom: 25px;">If you did not initiate this login, please visit your <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none;">account settings</a> and change your password.</p>
                
                <p style="font-size: 16px; margin-top: 30px;">Need help? <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none;">Contact our support team</a> anytime.</p>
                
                <p style="font-size: 16px; margin-top: 30px;">
                    Best regards,<br>
                    <strong>The Worldwise Team</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #f0f7ff; padding: 20px; text-align: center; font-size: 14px;">
                <p style="margin: 0 0 10px;">
                    WorldWise Inc. | 123 Main St, Mountain View Fct.
                </p>
                <p style="margin: 0;">
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Unsubscribe</a> | 
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | 
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Terms of Service</a>
                </p>
            </td>
        </tr>
    </table>
</div>
`;

// NEW SUBSCRIPTION
export const subscriptionTemplate = ({
	userName,
	subscriptionName,
	renewalDate,
	planName,
	price,
	paymentMethod,
}) => `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f7fa;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <tr>
           <td style="background-color: #06446b; color:#29ede4; text-align: center;">
                <p style="font-size: 34px; line-height: 34px; font-weight: 800;">WorldWise Inc.</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 40px 30px;">                
                <p style="font-size: 16px; margin-bottom: 25px;">Hello <strong style="color: #06446b;">${userName}</strong>,</p>
                
                <p style="font-size: 16px; margin-bottom: 25px; text-transform:uppercase;"> <strong>Congratulations !!!</strong>.</p>

                <p style="font-size: 16px; margin-bottom: 25px;">Your <strong>${subscriptionName}</strong> subscription has been created successfully, and is set to renew on<strong style="color: #06446b;"> ${renewalDate}</strong>.</p>
             
                
                <table cellpadding="15" cellspacing="0" border="0" width="100%" style="background-color: #f0f7ff; border-radius: 10px; margin-bottom: 25px;">
                    <tr>
                        <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                            <strong>Plan:</strong> ${planName}
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                            <strong>Price:</strong> ${price}
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px;">
                            <strong>Payment Method:</strong> ${paymentMethod}
                        </td>
                    </tr>
                </table>
                
                <p style="font-size: 16px; margin-bottom: 25px;">If you'd like to make changes or cancel your subscription, please visit your <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none;">account settings</a> before the renewal date.</p>
                
                <p style="font-size: 16px; margin-top: 30px;">Need help? <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none;">Contact our support team</a> anytime.</p>
                
                <p style="font-size: 16px; margin-top: 30px;">
                    Best regards,<br>
                    <strong>The Worldwise Team</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #f0f7ff; padding: 20px; text-align: center; font-size: 14px;">
                <p style="margin: 0 0 10px;">
                    WorldWise Inc. | 123 Main St, Mountain View Fct.
                </p>
                <p style="margin: 0;">
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Unsubscribe</a> | 
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | 
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Terms of Service</a>
                </p>
            </td>
        </tr>
    </table>
</div>
`;

// SUBSCRIPTION REMINDER
export const subscriptionReminderTemplate = ({
	userName,
	subscriptionName,
	renewalDate,
	planName,
	price,
	paymentMethod,
	daysLeft,
}) => `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f4f7fa;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <tr>
           <td style="background-color: #06446b; color:#29ede4; text-align: center;">
                <p style="font-size: 34px; line-height: 34px; font-weight: 800;">WorldWise Inc.</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 40px 30px;">                
                <p style="font-size: 16px; margin-bottom: 25px;">Hello <strong style="color: #06446b;">${userName}</strong>,</p>
                
                <p style="font-size: 16px; margin-bottom: 25px;">Your <strong>${subscriptionName}</strong> subscription is set to renew on <strong style="color: #06446b;">${renewalDate}</strong> (${daysLeft} days from today).</p>
                
                <table cellpadding="15" cellspacing="0" border="0" width="100%" style="background-color: #f0f7ff; border-radius: 10px; margin-bottom: 25px;">
                    <tr>
                        <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                            <strong>Plan:</strong> ${planName}
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                            <strong>Price:</strong> ${price}
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 16px;">
                            <strong>Payment Method:</strong> ${paymentMethod}
                        </td>
                    </tr>
                </table>
                
                <p style="font-size: 16px; margin-bottom: 25px;">If you'd like to make changes or cancel your subscription, please visit your <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none;">account settings</a> before the renewal date.</p>
                
                <p style="font-size: 16px; margin-top: 30px;">Need help? <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none;">Contact our support team</a> anytime.</p>
                
                <p style="font-size: 16px; margin-top: 30px;">
                    Best regards,<br>
                    <strong>The Worldwise Team</strong>
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #f0f7ff; padding: 20px; text-align: center; font-size: 14px;">
                <p style="margin: 0 0 10px;">
                    WorldWise Inc. | 123 Main St, Mountain View Fct.
                </p>
                <p style="margin: 0;">
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Unsubscribe</a> | 
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | 
                    <a href="https://worldwise-travelers.netlify.app/" style="color: #06446b; text-decoration: none; margin: 0 10px;">Terms of Service</a>
                </p>
            </td>
        </tr>
    </table>
</div>
`;
