Pages:

1. Login
- navbar: blank
- main: LoginForm

2. Create new account
- navbar: blank
- main: CreateNewUserForm

3. Public Parent Profile
- navbar: NavBar
- main:
  - PublicParentProfile
    - ParentProfileCard(image/avatar/something, basicinfo, babysitternetwork)
    - POSSIBLY accept request if babysitter is viewing

4. Public Babysitter Profile
- navbar: NavBar
- main:
  - PublicBabysitterProfile:
    - BabysitterProfileCard
    - Reviews
    - Request

5. Private Parent Profile
- navbar: NavBar
- main:
  - PrivateParentProfileCard
    - image
    - information
    - specific needs
    - extra requests

6. Private Babysitter Profile
- navbar: NavBar
- main:
  - PrivateBabysitterProfile
    - BabySitterProfileCard
    - BookingRequestForm
    - ReviewForm

7. Parent Dashboard
- navbar: DashboardNavBar
- main:
  - ParentDashboard
    - SearchBar
    - Bookings (contains BookingsTable)
    - Network(of babysitters)

8. Babysitter Dashboard
- navbar: DashboardNavBar
- main:
  - BabysitterDashboard
    - Bookings
    - Requests
    - Network(of families)

9. Edit Babysitter Profile
- navbar: NavBar
- main:
  - EditBabySitterForm

10. Edit Parent Profile
- navbar: NavBar
- main:
  - EditParentForm


Unique NavBars:
- NavBar: displayUserName, Link:Dashboard, Link:Logout
- DashboardNavBar: displayUserName, Link:Edit Profile, Link:Logout

Unique Page Components for Main
- LoginForm
- CreateNewUserForm
- PublicParentProfile
- PublicBabysitterProfile
- PrivateParentProfile
- PrivateBabysitter
