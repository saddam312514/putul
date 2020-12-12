const express = require('express')
const auth = require('../../middleware/auth')
const {check,validationResult} = require('express-validator/check')

const Profile = require('../../models/Profile')
const User = require('../../models/User')

const router = express.Router();

//@ route GET api/profile/me
//@desc Get Current users profile
//@#access Private

router.get('/me',auth, async (req,res) => {
    try{
        const profile = await Profile.findOne({user: req.user.id}).populate('user', ['name', 'avatar'])
        if(!profile){
            return res.status(400).json({msg: 'There is no Profile for this user'})
        }
        res.json(profile)
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')

    }
})

//@ route Post api/profile
//@desc Add Profile and Update
//@#access Private
router.post(
    '/',
  [
    auth,
    [
      check('status', 'Status is required')
        .not()
        .isEmpty(),
      check('skills', 'Skills is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim());
    }

    // Build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

     try{
         let profile = await Profile.findOne({user: req.user.id})
        if(profile){
            profile = await Profile.findOneAndUpdate(
                {
                    user: req.user.id
                }, 
                {$set: profileFields},
                {new: true}
            )
            return res.json(profile)
        }
        // Create Profile

        profile = new Profile(profileFields)
        await profile.save()
    
        res.json(profile)

     
        }catch(err){
         console.error(err.message)
         res.status(500).send('Server Error')
     }

}

)

// @route GET api/profile
// All Profiles
// access public

router.get('/', async(req,res)=>{
    try{
        const profiles = await Profile.find().populate('user',['name', 'avatar'])
        res.json(profiles)
        
    }
    catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route GET api/profile/user/user_id
// All Profile By user ID
// access public

router.get('/user/:user_id', async(req,res)=>{
    try{
        const profile = await Profile.findOne({user: req.params.user_id}).populate('user',['name', 'avatar'])
        if(!profile) return res.status(400).json({msg: 'Profile is not Found'})

        res.json(profile)
        
    }
    catch(err){
        console.error(err.message)
        if(err.kind == 'ObjectId'){
            return res.status(400).json({msg: 'Profile is not found'})
        }
        res.status(500).send('Server Error')
    }
})

// @route DELETE api/profile/
// Delete  Profile, user & posts
// access privete

router.delete('', auth, async(req,res)=>{
    try{
        // todo - remove users posts
        // remove profile
       await Profile.findOneAndRemove({user: req.user.id})

       // Remove user
       await User.findOneAndRemove({_id: req.user.id})
        

        res.json({msg: 'User Deleted'})
        
    }
    catch(err){
        console.error(err.message)
        if(err.kind == 'ObjectId'){
            return res.status(400).json({msg: 'Profile is not found'})
        }
        res.status(500).send('Server Error')
    }
})

// Put api/profile/experience
// Add profile experience

//access Private

router.put('/experience',[auth,[
    check('title', 'Title is Required').not().isEmpty(),
    check('company', 'Company is Required').not().isEmpty(),
    check('from', 'From is Required').not().isEmpty()
   
]
],
async(req,res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body

    const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }
    try{
        const profile = await Profile.findOne({user: req.user.id})

        profile.experience.unshift(newExp)

        await profile.save()

        res.json(profile)

    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')

    }

}
 )

 // route Delete Api/profile/exeperience/:exp_id
 //@desc Delete exeperience from profile
 // access Private

 router.delete('/experience/:exp_id', auth, async (req,res)=>{
    try{

        const profile = await Profile.findOne({user: req.user.id})

        // Get Remove Index
        const removeIndex = profile.experience.map(item=> item.id).indexOf(req.params.exp_id)
        profile.experience.splice(removeIndex,1)
        await profile.save()
        res.json(profile)

    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')

    }
 })

 // Put api/profile/Education
// Add profile Education

//access Private
router.put('/education',[auth,[
    check('school', 'School is Required').not().isEmpty(),
    check('degree', 'Degree is required').not().isEmpty()

]
],
async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})

    }
    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = req.body

    const newEdu = {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description

    }
    try{
        const profile = await Profile.findOne({user: req.user.id})

        profile.education.unshift(newEdu)
        await profile.save()
        res.json(profile)

    }catch(err){
        console.error(err.message)
        res.status(400).send('Server Error')
    }

}

)
 // route Delete Api/profile/Education/:exp_id
 //@desc Delete Education from profile
 // access Private

 router.delete('/education/:edu_id', auth, async(req,res)=>{
     try{

        const profile = await Profile.findOne({user: req.user.id})

        // Remove Index
        const removeIndex  = profile.education.map(item => item.id).indexOf(req.params.exp_id)
        profile.education.splice(removeIndex,1)
        await profile.save();
        res.json(profile)

     }catch(err){
         console.error(err.message)
         res.status(400).send('Server Error')
     }
 })



module.exports = router;