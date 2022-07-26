# Thoughts 

- I didn't get chance to add the refresh functionality due to time. I was planning on using the onRefresh method on the FlatList component.
- Currently, when filtering / sorting I'm calling the API again which sometimes could take a few seconds. Because the data isn't changing that much I could just store the data locally and then manipulate that data instead. Clearing any filtering/sorting on refresh where I would actually hit the API again.
- I was going to use RNPickerSelect for the filter by years functionality. I'd take an array of the years from the API and remove the duplicates. I was having some problems getting the package installed so due to time contraints I simply stuck a few buttons inside the modal component that let you pick a few random years to show the filtering working.
- I would've created a few more screens and components to use for any errors, loading states and so on.
- I started extracting the API call into it's own hook, again due to to time this isn't used but I've left it in. 
