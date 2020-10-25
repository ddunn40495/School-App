


-- CREATE TABLE students ( student_id SERIAL, first_name text, last_name text, username text, password text, email text, year text, PRIMARY KEY (student_id) );

-- SELECT 
--    table_name, 
--    column_name, 
--    data_type 
-- FROM 
--    information_schema.columns
-- WHERE 
--    table_name = 'students';

INSERT INTO
   students( first_name, last_name, username, password, email, year) 
VALUES
   (
      'Sam', 'Smith', 'ss01', 'password', 'ssmith@nomail.com', 'freshmman'
   );


   INSERT INTO
   students( first_name, last_name, username, password, email, year) 
VALUES
   (
      'Micheal', 'Sims', 'ss02', 'password', 'sims@nomail.com', 'freshmman'
   ),
      (
      'Micheal', 'Simss', 'ss03', 'password', 'sims@nomail.com', 'freshmman'
   ),
      (
      'Micheal', 'Simsss', 'ss04', 'password', 'sims@nomail.com', 'freshmman'
   ),
      (
      'Micheal', 'Simsssss', 'ss05', 'password', 'sims@nomail.com', 'freshmman'
   ),
      (
      'Micheal', 'Simssssss', 'ss06', 'password', 'sims@nomail.com', 'freshmman'
   ),
      (
      'Micheal', 'Simsssssss', 'ss07', 'password', 'sims@nomail.com', 'freshmman'
   ),
      (
      'Micheal', 'Simssssssss', 'ss08', 'password', 'sims@nomail.com', 'freshmman'
   );

