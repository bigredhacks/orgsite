import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack, Card, Box} from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "@fontsource/inter";
import "@fontsource/museomoderno";

interface FAQAccordionPropTypes {
    question: string,
    answer: string,
}

const FAQS = [
    {
        "Q": "What are the roles of each subteam?",
        "A": "You can find details about our teams on the Teams page!"
    }, {
        "Q": "How can I get involved?",
        "A": "We’re currently not recruiting for our team but you could send us an email saying that you’re interested and you’ll be the first to know! If you want to participate in our Hackathon, follow our social media pages and we’ll release more information there!"
    },
    {
        "Q": "I have a concern or question that is not answered in your FAQs, what should I do?",
        "A": "You can contact us at our email bigredhacks@cornell.edu or fill in the form on the Contact Us page!"
    },
    {
        "Q": "Who can attend our Hackathons?",
        "A": "Everyone (over 18), regardless of their education level, is invited to participate in our Hackathons!"
    }
];

function FAQAccordion({ question, answer }: FAQAccordionPropTypes) {
  return (
      <Accordion sx={{
          backgroundColor: "white",
          width: "80%",
          margin: "2px",
          padding: 0.5,
          paddingBottom: 0,
          borderRadius: 5,
          color: "white",
          mb: 2,
          '&:hover': {
              backgroundColor: '#FF77BB',
          },
          '&.MuiAccordion-root': {
            borderRadius: 5,
          },
        }}>
        <Box sx={{backgroundColor: "#0E1116", borderRadius: 5, padding: 2, marginBottom: 0.5, '&:hover': {
            '.MuiTypography-root': { // text on hover
              color: '#FF77BB',
            },
            '.MuiSvgIcon-root': { //icon color on hover
                color: '#FF77BB',
            },},}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white'}} />}>

            <Typography sx={{
                fontFamily: 'Inter, sans-serif',
                borderRadius: 5,
                color: 'inherit',
                textAlign: "left",
             }}>
              {question}
            </Typography>
          </AccordionSummary>
          </Box>
          <AccordionDetails >
              <Typography sx={{ fontFamily: 'Inter, sans-serif', color: "black", textAlign: "left", py: 2, "&.MuiTypography-root": { color: "black" }}}>
                  {answer}
              </Typography>
          </AccordionDetails>
      </Accordion>
  );
}

function FAQ() {
    return (
        <Card sx={{ backgroundColor: "#22262C" }} id="faq">
            <Typography variant="h3" fontWeight={600} color="white"  sx={{ fontFamily: 'MuseoModerno, sans-serif' }} marginTop={4}>
                FAQs
            </Typography>
            <Stack mt={3} direction="column" display="flex" alignItems={"center"} padding={6} spacing={5}>
                {FAQS.map((elem, index) => (
                    <FAQAccordion key={index} question={elem.Q} answer={elem.A} />
                ))}
            </Stack>
        </Card>
    );
}

export default function FAQPage() {
    return (
        <div>
            <FAQ />
        </div>
    );
}